'use client';

import Plan from '@/components/plan';
import { ChangeEvent, useState } from 'react';
import styles from './page.module.css';
import PageHeader from '@/components/page-header';
import Switch from '@/components/ui/switch';
import plans from '@/config/plans';
import Container from '@/components/page-container';
import PageFooter from '@/components/page-footer';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [planType, setPlanType] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);

  const router = useRouter();

  const handleChangePlanType = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPlanType('yearly');
    } else {
      setPlanType('monthly');
    }
  };

  const handleOnNext = () => {
    console.log('next');
    router.push('/steps/add-ons');
  };

  return (
    <Container>
      <div>
        <PageHeader
          title="Select Your Plan"
          description="You have the option of monthly or yearly billing."
        />

        <div className={styles['plans-container']}>
          {plans.map(plan => (
            <Plan
              key={plan.name}
              onClick={() => setSelectedPlanId(plan.id)}
              plan={planType}
              icon={plan.icon}
              price={plan.plan[planType].price}
              name={plan.name}
              isSelected={selectedPlanId === plan.id}
            />
          ))}
        </div>

        <div className={styles['plan-type-container']}>
          <p>Monthly</p>
          <Switch onChange={handleChangePlanType} />
          <p>Yearly</p>
        </div>
      </div>

      <PageFooter
        isDisabled={!selectedPlanId}
        previouseRoute="/steps/info"
        onNext={handleOnNext}
      />
    </Container>
  );
}

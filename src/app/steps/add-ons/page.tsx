'use client';
import React, { ChangeEvent, useState } from 'react';
import AddOn from '@/components/add-on';
import Container from '@/components/page-container';
import PageHeader from '@/components/page-header';
import addOns from '@/config/add-ons';
import styles from './page.module.css';
import PageFooter from '@/components/page-footer';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [selecteds, setSelecteds] = useState<Array<number>>([]);

  const router = useRouter();

  const handleSelectAddOn = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    if (e.target.checked) {
      setSelecteds([...selecteds, id]);
    } else {
      setSelecteds(selecteds.filter(selectedId => selectedId !== id));
    }
  };

  const handleNext = () => {
    router.push('/steps/summary');
  };

  return (
    <Container>
      <div>
        <PageHeader
          title="Pick add-ons"
          description="Add-ons help enchance your gaming experience."
        />

        <div className={styles['add-ons']}>
          {addOns.map(addon => (
            <AddOn
              key={addon.id}
              isSelected={selecteds.some(selected => selected === addon.id)}
              onSelect={e => handleSelectAddOn(e, addon.id)}
              planType="monthly"
              price={2}
              title={addon.title}
              description={addon.description}
            />
          ))}
        </div>
      </div>

      <PageFooter
        isDisabled={selecteds.length === 0}
        previouseRoute="/steps/plan"
        onNext={handleNext}
      />
    </Container>
  );
};

export default Page;

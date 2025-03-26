'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/components/company-form-modal';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();

  // Создайте обработчик отправки
  const handleSubmit = (values: any) => {
    console.log('Form submitted with values:', values);
    // Дополнительная логика для отправки данных, если нужно
  };

  return (
    <CompanyFormModal
      show={true}
      onClose={() => router.back()}
      onSubmit={handleSubmit} // Передаем реальный обработчик onSubmit
    />
  );
}

import React from 'react';
import NavigationHeader from '@/components/dashboard/NavigationHeader';

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      <div className="w-[960px] mx-auto">
        {/* Header */}
        <NavigationHeader />

        {/* Content will be added here */}
      </div>
    </div>
  );
}

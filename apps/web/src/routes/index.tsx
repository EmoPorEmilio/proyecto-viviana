import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className='p-2'>
      <span className='text-accent-200'>Welcome Home!</span>
    </div>
  );
}

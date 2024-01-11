'use client';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../../../../types/supabase';

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <>
      {/** PROD: Change redirectTo property with domain for production*/ }
      <h2>Please Login</h2>
      <Auth
        supabaseClient={supabase}
        view='magic_link'
        appearance={{
          theme: ThemeSupa,
          style: {
            button: {
              background: '#000000',
              color: 'white',
              textDecoration: 'bold',
              borderRadius: 'var(--border-radius)',
              textTransform: 'uppercase',
              maxWidth: '15rem'
            },
            label: { fontFamily: 'inter', color: '#000000', textTransform: 'uppercase' },
            anchor: { marginRight: 'auto'}
          },
        }}
        theme='light'
        showLinks={true}
        providers={['google']}
        redirectTo='http://localhost:3000/auth/callback'
      />
    </>
  );
}

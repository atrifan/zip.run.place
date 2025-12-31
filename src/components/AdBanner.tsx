import React, { useEffect } from 'react';
import { View } from '@adobe/react-spectrum';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

/**
 * Google AdSense Banner Component
 */
export const AdBanner: React.FC<AdBannerProps> = ({ 
  slot = '1234567890', 
  format = 'auto', 
  style = {} 
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle && import.meta.env.PROD) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <View
      backgroundColor="gray-100"
      padding="size-200"
      borderRadius="medium"
      marginY="size-300"
      UNSAFE_style={{
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </View>
  );
};


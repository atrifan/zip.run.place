import React, { useEffect } from 'react';
import { View } from '@adobe/react-spectrum';
import { ADS_CONFIG, getAdClient, shouldShowAds } from '../config/ads.config';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

/**
 * Google AdSense Banner Component
 * Uses configuration from src/config/ads.config.ts
 */
export const AdBanner: React.FC<AdBannerProps> = ({
  slot = '1234567890',
  format = 'auto',
  style = {}
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle && import.meta.env.PROD && shouldShowAds()) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  // Don't render if ads are disabled
  if (!shouldShowAds()) {
    return null;
  }

  // Show placeholder in test mode
  if (ADS_CONFIG.testMode) {
    return (
      <View
        borderRadius="medium"
        marginY="size-400"
        UNSAFE_style={{
          minHeight: format === 'vertical' ? '600px' : '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
          border: '2px dashed rgba(255, 255, 255, 0.3)',
          borderRadius: '16px',
          ...style
        }}
      >
        <div style={{
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.5)',
          padding: '1rem'
        }}>
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>📢</span>
          <span style={{ fontSize: '0.9rem' }}>Ad Space ({format})</span>
          <br />
          <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Slot: {slot}</span>
        </div>
      </View>
    );
  }

  return (
    <View
      borderRadius="medium"
      marginY="size-400"
      UNSAFE_style={{
        minHeight: format === 'vertical' ? '600px' : '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        ...style
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client={getAdClient()}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </View>
  );
};


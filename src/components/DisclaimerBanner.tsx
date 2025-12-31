import React from 'react';
import { View } from '@adobe/react-spectrum';

/**
 * Medical Disclaimer Banner Component - Beautiful Glass Design
 */
export const DisclaimerBanner: React.FC = () => {
  return (
    <View
      marginBottom="size-500"
      UNSAFE_style={{
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(245, 158, 11, 0.1) 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(251, 191, 36, 0.3)',
        borderRadius: '20px',
        padding: '1.5rem 2rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <span style={{
          fontSize: '2.5rem',
          flexShrink: 0,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
        }}>
          ⚠️
        </span>
        <div>
          <h3 style={{
            color: '#fbbf24',
            fontSize: '1.3rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            margin: 0,
          }}>
            Medical Disclaimer
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '1rem',
            lineHeight: 1.6,
            margin: 0,
          }}>
            This calculator is for <strong>informational purposes only</strong> and is not a substitute for
            professional medical advice, diagnosis, or treatment. Always consult with a
            qualified healthcare provider before starting any diet, exercise, or fasting program.
            Individual results may vary.
          </p>
        </div>
      </div>
    </View>
  );
};


import React from 'react';
import { View, Text, Heading } from '@adobe/react-spectrum';
import Alert from '@spectrum-icons/workflow/Alert';

/**
 * Medical Disclaimer Banner Component
 */
export const DisclaimerBanner: React.FC = () => {
  return (
    <View
      backgroundColor="gray-200"
      padding="size-300"
      borderRadius="medium"
      marginBottom="size-400"
      UNSAFE_style={{
        border: '2px solid var(--spectrum-global-color-gray-400)'
      }}
    >
      <View UNSAFE_style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <Alert size="M" UNSAFE_style={{ flexShrink: 0, marginTop: '2px' }} />
        <View>
          <Heading level={4} marginBottom="size-100">Medical Disclaimer</Heading>
          <Text>
            This calculator is for informational purposes only and is not a substitute for 
            professional medical advice, diagnosis, or treatment. Always consult with a 
            qualified healthcare provider before starting any diet, exercise, or fasting program. 
            Individual results may vary.
          </Text>
        </View>
      </View>
    </View>
  );
};


import React from 'react';
import {
  View,
  Heading,
  Text,
  Flex,
  Well,
  Divider,
  Badge
} from '@adobe/react-spectrum';
import { WeightLossPlan } from '../types';

interface ResultsDisplayProps {
  plan: WeightLossPlan;
}

/**
 * Results Display Component
 */
export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ plan }) => {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <View marginTop="size-400">
      <Heading level={2} marginBottom="size-300">
        📈 Your Personalized Plan
      </Heading>

      {/* BMI Cards */}
      <Flex direction={{ base: 'column', M: 'row' }} gap="size-300" marginBottom="size-300">
        <View
          flex={1}
          backgroundColor="gray-50"
          padding="size-300"
          borderRadius="medium"
          UNSAFE_style={{
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            border: '2px solid var(--spectrum-global-color-gray-300)'
          }}
        >
          <Flex direction="column" alignItems="center" gap="size-100">
            <Text UNSAFE_style={{ fontSize: '2rem' }}>📏</Text>
            <Heading level={4}>Current BMI</Heading>
            <Text UNSAFE_style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {plan.currentBMI.value.toFixed(1)}
            </Text>
            <Badge variant={plan.currentBMI.color}>{plan.currentBMI.category}</Badge>
          </Flex>
        </View>

        <View
          flex={1}
          backgroundColor="gray-50"
          padding="size-300"
          borderRadius="medium"
          UNSAFE_style={{
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            border: '2px solid var(--spectrum-global-color-gray-300)'
          }}
        >
          <Flex direction="column" alignItems="center" gap="size-100">
            <Text UNSAFE_style={{ fontSize: '2rem' }}>🎯</Text>
            <Heading level={4}>Target BMI</Heading>
            <Text UNSAFE_style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {plan.targetBMI.value.toFixed(1)}
            </Text>
            <Badge variant={plan.targetBMI.color}>{plan.targetBMI.category}</Badge>
          </Flex>
        </View>
      </Flex>

      {/* Ideal Weight */}
      <Well marginBottom="size-300">
        <Flex alignItems="center" gap="size-200">
          <Text UNSAFE_style={{ fontSize: '1.5rem' }}>⚖️</Text>
          <View>
            <Heading level={4}>Medically Ideal Weight</Heading>
            <Text UNSAFE_style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              {plan.idealWeight.toFixed(1)} kg
            </Text>
          </View>
        </Flex>
      </Well>

      {/* Timeline */}
      <Well marginBottom="size-300">
        <Flex alignItems="center" gap="size-200">
          <Text UNSAFE_style={{ fontSize: '1.5rem' }}>📅</Text>
          <View>
            <Heading level={4}>Timeline to Goal</Heading>
            <Text UNSAFE_style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              {plan.weeksToGoal} weeks ({Math.ceil(plan.weeksToGoal / 4)} months)
            </Text>
            <Text>Target Date: {formatDate(plan.targetDate)}</Text>
          </View>
        </Flex>
      </Well>

      {/* Calorie Information */}
      <View
        backgroundColor="gray-50"
        padding="size-400"
        borderRadius="medium"
        marginBottom="size-300"
        UNSAFE_style={{
          border: '2px solid var(--spectrum-global-color-blue-400)',
          backgroundColor: '#e6f2ff'
        }}
      >
        <Heading level={3} marginBottom="size-200">🔥 Daily Calorie Plan</Heading>
        <Divider size="S" marginBottom="size-200" />
        
        <Flex direction="column" gap="size-150">
          <Flex justifyContent="space-between">
            <Text>Your BMR (Basal Metabolic Rate):</Text>
            <Text UNSAFE_style={{ fontWeight: 'bold' }}>{plan.bmr} cal/day</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Your TDEE (Total Daily Energy):</Text>
            <Text UNSAFE_style={{ fontWeight: 'bold' }}>{plan.tdee} cal/day</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Required Daily Deficit:</Text>
            <Text UNSAFE_style={{ fontWeight: 'bold', color: 'var(--spectrum-global-color-red-600)' }}>
              -{plan.dailyDeficit} cal/day
            </Text>
          </Flex>
          <Divider size="S" />
          <Flex justifyContent="space-between">
            <Text UNSAFE_style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
              Target Daily Calories:
            </Text>
            <Text UNSAFE_style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--spectrum-global-color-green-600)' }}>
              {plan.dailyCalories} cal
            </Text>
          </Flex>
        </Flex>
      </View>

      {/* Fasting Plan */}
      <View
        backgroundColor="gray-50"
        padding="size-400"
        borderRadius="medium"
        UNSAFE_style={{
          border: '2px solid var(--spectrum-global-color-purple-400)',
          backgroundColor: '#f3e8ff'
        }}
      >
        <Heading level={3} marginBottom="size-200">
          {plan.fastingPlan.icon} Recommended Fasting Plan
        </Heading>
        <Divider size="S" marginBottom="size-200" />
        
        <Heading level={4} marginBottom="size-100">{plan.fastingPlan.name}</Heading>
        <Text>{plan.fastingPlan.description}</Text>
        <Text marginTop="size-100" UNSAFE_style={{ fontWeight: 'bold' }}>
          {plan.fastingPlan.schedule}
        </Text>
      </View>
    </View>
  );
};


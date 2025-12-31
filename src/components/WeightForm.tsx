import { Component } from 'react';
import {
  Form,
  NumberField,
  Picker,
  Item,
  Button,
  View,
  Heading,
  Flex
} from '@adobe/react-spectrum';
import { Sex, UserInput } from '../types';

interface WeightFormProps {
  onSubmit: (input: UserInput) => void;
}

interface WeightFormState {
  age: number;
  sex: Sex;
  height: number;
  currentWeight: number;
  desiredWeight: number;
  timeToWeight: number | undefined;
  useCustomTime: boolean;
}

/**
 * Weight Loss Form Component (Class-based)
 */
export class WeightForm extends Component<WeightFormProps, WeightFormState> {
  constructor(props: WeightFormProps) {
    super(props);
    this.state = {
      age: 30,
      sex: 'male',
      height: 175,
      currentWeight: 80,
      desiredWeight: 70,
      timeToWeight: undefined,
      useCustomTime: false
    };
  }

  private handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { age, sex, height, currentWeight, desiredWeight, timeToWeight, useCustomTime } = this.state;
    
    this.props.onSubmit({
      age,
      sex,
      height,
      currentWeight,
      desiredWeight,
      timeToWeight: useCustomTime ? timeToWeight : undefined
    });
  };

  render() {
    const { age, sex, height, currentWeight, desiredWeight, timeToWeight, useCustomTime } = this.state;

    return (
      <View
        backgroundColor="gray-50"
        padding="size-400"
        borderRadius="large"
        UNSAFE_style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Heading level={2} marginBottom="size-300">
          📊 Your Information
        </Heading>
        
        <Form onSubmit={this.handleSubmit}>
          <Flex direction="column" gap="size-200">
            <NumberField
              label="Age"
              value={age}
              onChange={(value) => this.setState({ age: value })}
              minValue={10}
              maxValue={120}
              isRequired
            />

            <Picker
              label="Sex"
              selectedKey={sex}
              onSelectionChange={(key) => this.setState({ sex: key as Sex })}
              isRequired
            >
              <Item key="male">Male</Item>
              <Item key="female">Female</Item>
            </Picker>

            <NumberField
              label="Height (cm)"
              value={height}
              onChange={(value) => this.setState({ height: value })}
              minValue={100}
              maxValue={250}
              isRequired
            />

            <NumberField
              label="Current Weight (kg)"
              value={currentWeight}
              onChange={(value) => this.setState({ currentWeight: value })}
              minValue={30}
              maxValue={300}
              isRequired
            />

            <NumberField
              label="Desired Weight (kg)"
              value={desiredWeight}
              onChange={(value) => this.setState({ desiredWeight: value })}
              minValue={30}
              maxValue={300}
              isRequired
            />

            <Picker
              label="Time Frame"
              selectedKey={useCustomTime ? 'custom' : 'auto'}
              onSelectionChange={(key) => this.setState({ useCustomTime: key === 'custom' })}
            >
              <Item key="auto">Calculate for me (Recommended)</Item>
              <Item key="custom">I'll set my own timeline</Item>
            </Picker>

            {useCustomTime && (
              <NumberField
                label="Weeks to Goal"
                value={timeToWeight || 12}
                onChange={(value) => this.setState({ timeToWeight: value })}
                minValue={1}
                maxValue={104}
                isRequired
              />
            )}

            <Button
              type="submit"
              variant="cta"
              style="fill"
              marginTop="size-300"
              UNSAFE_style={{ width: '100%' }}
            >
              Calculate My Plan 🎯
            </Button>
          </Flex>
        </Form>
      </View>
    );
  }
}


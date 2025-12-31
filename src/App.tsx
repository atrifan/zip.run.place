import { Component } from 'react';
import {
  Provider,
  defaultTheme,
  View,
  Heading,
  Text,
  Flex,
  Divider
} from '@adobe/react-spectrum';
import { WeightForm } from './components/WeightForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { AdBanner } from './components/AdBanner';
import { WeightCalculator } from './utils/WeightCalculator';
import { UserInput, WeightLossPlan } from './types';

interface AppState {
  plan: WeightLossPlan | null;
}

/**
 * Main App Component (Class-based)
 */
class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      plan: null
    };
  }

  private handleFormSubmit = (input: UserInput): void => {
    const plan = WeightCalculator.generatePlan(input);
    this.setState({ plan });
    
    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  render() {
    const { plan } = this.state;

    return (
      <Provider theme={defaultTheme} colorScheme="light">
        <View
          padding={{ base: 'size-200', M: 'size-400', L: 'size-600' }}
          maxWidth="1200px"
          marginX="auto"
          minHeight="100vh"
        >
          {/* Header */}
          <View marginBottom="size-400" UNSAFE_style={{ textAlign: 'center' }}>
            <Heading level={1} UNSAFE_style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
              ✂️ CUT
            </Heading>
            <Text UNSAFE_style={{ fontSize: '1.25rem', color: 'var(--spectrum-global-color-gray-700)' }}>
              Your Personal Weight Loss Calculator & Fasting Plan Generator
            </Text>
          </View>

          <Divider size="M" marginBottom="size-400" />

          {/* Ad Banner - Top */}
          <AdBanner slot="1234567890" format="horizontal" />

          {/* Disclaimer */}
          <DisclaimerBanner />

          {/* Main Content */}
          <Flex
            direction={{ base: 'column', L: 'row' }}
            gap="size-400"
            marginBottom="size-400"
          >
            {/* Form Section */}
            <View flex={{ L: 1 }}>
              <WeightForm onSubmit={this.handleFormSubmit} />
            </View>

            {/* Ad Banner - Side */}
            <View flex={{ L: 0 }} width={{ L: '300px' }}>
              <AdBanner slot="0987654321" format="vertical" style={{ minHeight: '600px' }} />
            </View>
          </Flex>

          {/* Results Section */}
          {plan && (
            <View id="results">
              <AdBanner slot="1122334455" format="horizontal" />
              <ResultsDisplay plan={plan} />
              <AdBanner slot="5544332211" format="horizontal" />
            </View>
          )}

          {/* Footer */}
          <Divider size="M" marginY="size-600" />
          <View UNSAFE_style={{ textAlign: 'center' }} marginBottom="size-400">
            <Text UNSAFE_style={{ fontSize: '0.875rem', color: 'var(--spectrum-global-color-gray-600)' }}>
              © 2025 zip.run.place | CUT - Weight Loss Calculator
            </Text>
            <Text UNSAFE_style={{ fontSize: '0.75rem', color: 'var(--spectrum-global-color-gray-500)', marginTop: '0.5rem' }}>
              This tool provides estimates based on general medical formulas. 
              Always consult healthcare professionals for personalized advice.
            </Text>
          </View>

          {/* Bottom Ad */}
          <AdBanner slot="9988776655" format="horizontal" />
        </View>
      </Provider>
    );
  }
}

export default App;


import { Component } from 'react';
import { View } from '@adobe/react-spectrum';
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

interface FormFieldProps {
  icon: string;
  label: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ icon, label, children }) => (
  <div style={{
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '1.25rem 1.5rem',
    marginBottom: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
      <span style={{ fontSize: '1.5rem' }}>{icon}</span>
      <label style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', fontWeight: 600 }}>
        {label}
      </label>
    </div>
    {children}
  </div>
);

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '1rem 1.25rem',
  fontSize: '1.25rem',
  fontWeight: 600,
  background: 'rgba(255, 255, 255, 0.95)',
  border: '2px solid transparent',
  borderRadius: '12px',
  outline: 'none',
  transition: 'all 0.3s ease',
  color: '#1a1a2e',
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23667eea'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 1rem center',
  backgroundSize: '1.5rem',
  paddingRight: '3rem',
};

/**
 * Weight Loss Form Component - Beautiful Redesign
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
        UNSAFE_style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '32px',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>📊</span>
          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 800,
            margin: 0,
          }}>
            Enter Your Details
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem', fontSize: '1.1rem' }}>
            We'll create your personalized plan
          </p>
        </div>

        <form onSubmit={this.handleSubmit}>
          {/* Age & Sex Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <FormField icon="🎂" label="Age">
              <input
                type="number"
                value={age}
                onChange={(e) => this.setState({ age: parseInt(e.target.value) || 0 })}
                min={10}
                max={120}
                required
                style={inputStyle}
                placeholder="Your age"
              />
            </FormField>

            <FormField icon="👤" label="Sex">
              <select
                value={sex}
                onChange={(e) => this.setState({ sex: e.target.value as Sex })}
                required
                style={selectStyle}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </FormField>
          </div>

          {/* Height */}
          <FormField icon="📏" label="Height (cm)">
            <input
              type="number"
              value={height}
              onChange={(e) => this.setState({ height: parseInt(e.target.value) || 0 })}
              min={100}
              max={250}
              required
              style={inputStyle}
              placeholder="Your height in cm"
            />
          </FormField>

          {/* Weight Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <FormField icon="⚖️" label="Current Weight (kg)">
              <input
                type="number"
                value={currentWeight}
                onChange={(e) => this.setState({ currentWeight: parseInt(e.target.value) || 0 })}
                min={30}
                max={300}
                required
                style={inputStyle}
                placeholder="Current weight"
              />
            </FormField>

            <FormField icon="🎯" label="Goal Weight (kg)">
              <input
                type="number"
                value={desiredWeight}
                onChange={(e) => this.setState({ desiredWeight: parseInt(e.target.value) || 0 })}
                min={30}
                max={300}
                required
                style={inputStyle}
                placeholder="Target weight"
              />
            </FormField>
          </div>

          {/* Timeline */}
          <FormField icon="📅" label="Timeline">
            <select
              value={useCustomTime ? 'custom' : 'auto'}
              onChange={(e) => this.setState({ useCustomTime: e.target.value === 'custom' })}
              style={selectStyle}
            >
              <option value="auto">🤖 Calculate for me (Recommended)</option>
              <option value="custom">⏱️ I'll set my own timeline</option>
            </select>
          </FormField>

          {useCustomTime && (
            <FormField icon="⏳" label="Weeks to Goal">
              <input
                type="number"
                value={timeToWeight || 12}
                onChange={(e) => this.setState({ timeToWeight: parseInt(e.target.value) || 12 })}
                min={1}
                max={104}
                required
                style={inputStyle}
                placeholder="Number of weeks"
              />
            </FormField>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1.25rem 2rem',
              fontSize: '1.4rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              marginTop: '1.5rem',
              boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(102, 126, 234, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(102, 126, 234, 0.4)';
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>🚀</span>
            Calculate My Plan
          </button>
        </form>
      </View>
    );
  }
}


import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, Select, MenuItem } from '@mui/material';

// Define the shape of the data using TypeScript interfaces
interface Requirement {
  name: string;
  description: string;
  type: string; // e.g., 'feature', 'bugfix'
}

interface GatherRequirementsFormData {
  requirementName: string;
  requirementDescription: string;
  requirementType: string;
}

// Define validation schema for form inputs using Yup
const schema = yup.object().shape({
  requirementName: yup.string().required('Requirement name is required'),
  requirementDescription: yup.string().min(10, 'Description must be at least 10 characters').max(500, 'Description cannot exceed 500 characters'),
  requirementType: yup.string().oneOf(['feature', 'bugfix'], 'Please select a valid type')
});

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<GatherRequirementsFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: GatherRequirementsFormData) => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="requirementName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Requirement Name"
            variant="outlined"
            fullWidth
            error={!!errors.requirementName}
            helperText={errors.requirementName?.message}
            aria-label="Requirement name input"
            aria-invalid={!!errors.requirementName}
            required
          />
        )}
      />

      <Controller
        name="requirementDescription"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Requirement Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            error={!!errors.requirementDescription}
            helperText={errors.requirementDescription?.message}
            aria-label="Requirement description input"
            aria-invalid={!!errors.requirementDescription}
            required
          />
        )}
      />

      <Controller
        name="requirementType"
        control={control}
        render={({ field }) => (
          <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select" fullWidth>
            <MenuItem value='feature' aria-label="Feature option">Feature</MenuItem>
            <MenuItem value='bugfix' aria-label="Bug fix option">Bug Fix</MenuItem>
          </Select>
        )}
      />

      <Button type="submit" variant="contained" color="primary" disabled={loading} aria-label="Submit requirement">
        {loading ? 'Submitting...' : 'Submit Requirement'}
      </Button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, Select, MenuItem } from '@mui/material';

// Define the shape of the data using TypeScript interfaces
interface Requirement {
  name: string;
  description: string;
  type: string; // e.g., 'feature', 'bugfix'
}

interface GatherRequirementsFormData {
  requirementName: string;
  requirementDescription: string;
  requirementType: string;
}

// Define validation schema for form inputs using Yup
const schema = yup.object().shape({
  requirementName: yup.string().required('Requirement name is required'),
  requirementDescription: yup.string().min(10, 'Description must be at least 10 characters').max(500, 'Description cannot exceed 500 characters'),
  requirementType: yup.string().oneOf(['feature', 'bugfix'], 'Please select a valid type')
});

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<GatherRequirementsFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: GatherRequirementsFormData) => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="requirementName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Requirement Name"
            variant="outlined"
            fullWidth
            error={!!errors.requirementName}
            helperText={errors.requirementName?.message}
            aria-label="Requirement name input"
            aria-invalid={!!errors.requirementName}
            required
          />
        )}
      />

      <Controller
        name="requirementDescription"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Requirement Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            error={!!errors.requirementDescription}
            helperText={errors.requirementDescription?.message}
            aria-label="Requirement description input"
            aria-invalid={!!errors.requirementDescription}
            required
          />
        )}
      />

      <Controller
        name="requirementType"
        control={control}
        render={({ field }) => (
          <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select" fullWidth>
            <MenuItem value='feature' aria-label="Feature option">Feature</MenuItem>
            <MenuItem value='bugfix' aria-label="Bug fix option">Bug Fix</MenuItem>
          </Select>
        )}
      />

      <Button type="submit" variant="contained" color="primary" disabled={loading} aria-label="Submit requirement">
        {loading ? 'Submitting...' : 'Submit Requirement'}
      </Button>
    </form>
  );
};

export default GatherRequirements;
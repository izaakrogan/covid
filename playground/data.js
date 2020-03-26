const rawOptions = [
  { id: 'severe-copd', name: 'severe COPD', mortalityRate: 3 },
  { id: 'asthma', name: 'asthma', mortalityRate: 3 },
  {
    id: 'coronary-heart-disease-(chd)',
    name: 'Coronary Heart DIsease (CHD)',
    mortalityRate: 3,
  },
  { id: 'ami', name: 'AMI', mortalityRate: 3 },
  { id: 'hf', name: 'HF', mortalityRate: 3 },
  { id: 'aaa', name: 'AAA', mortalityRate: 3 },
  { id: 'af', name: 'AF', mortalityRate: 3 },
  { id: 'tia', name: 'TIA', mortalityRate: 3 },
  { id: 'stable-angina', name: 'stable angina', mortalityRate: 3 },
  { id: 'unstable-angina', name: 'unstable angina', mortalityRate: 3 },
  { id: 'stroke-nos', name: 'Stroke NOS', mortalityRate: 3 },
  { id: 'stroke-ischaemic', name: 'Stroke ischaemic', mortalityRate: 3 },
  {
    id: 'subarachnoid-hemorrhage',
    name: 'Subarachnoid hemorrhage',
    mortalityRate: 3,
  },
  {
    id: 'stroke-intracerebral',
    name: 'Stroke intracerebral',
    mortalityRate: 3,
  },
  { id: 'pad', name: 'PAD', mortalityRate: 3 },
  { id: 'scd', name: 'SCD', mortalityRate: 3 },
  { id: 'hypertension', name: 'hypertension', mortalityRate: 3 },
];
const b = rawOptions.map(i => {
  const id = i.disease.toLowerCase().replace(/ /g, '-');
  return {
    id,
    name: i.disease,
    mortalityRate: 3,
  };
});

console.log('b', JSON.stringify(b));

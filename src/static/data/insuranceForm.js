export const insuranceForm = [
  {
    form: 'firstName',
    header: "What's your first name?",
    input: {
      type: 'text',
      placeholder: 'ex. John',
    },
    canBeSubmitted: false,
  },
  {
    form: 'address',
    header: "What's your address?",
    input: {
      type: 'text',
      placeholder: 'ex. 185 Broad Street New York, New york 11004',
    },
    canBeSubmitted: false,
  },
  {
    form: 'occupation',
    header: "What's your occupation?",
    input: {
      type: 'radio',
      options: [
        {
          label: 'Employed',
          value: 'EMPLOYED',
        },
        {
          label: 'Self employed',
          value: 'SELF_EMPLOYED',
        },
        {
          label: 'Student',
          value: 'STUDENT',
        },
      ],
    },
    canBeSubmitted: false,
  },
  {
    form: 'hasChildren',
    header: 'Do you have any children?',
    input: {
      type: 'radio',
      options: [
        {
          label: 'Yes',
          value: true,
        },
        {
          label: 'No',
          value: false,
        },
      ],
    },
    canBeSubmitted: false,
  },
  {
    form: 'numberOfChildren',
    header: 'How many children do you have?',
    input: {
      type: 'number',
      placeholder: 'ex. 2',
    },
    canBeSubmitted: false,
  },
  {
    form: 'email',
    header: "What's your email?",
    input: {
      type: 'input',
      placeholder: 'ex. johndoe@getpopsure.com',
    },
    canBeSubmitted: true,
  },
];

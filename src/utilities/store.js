let data = JSON.parse(localStorage.getItem('data')) || {};

export const saveSettings = ({ ...rest }) => {
  data = {
    ...data,
    ['settings']: {
      ...rest
    }
  };
  localStorage.setItem('data', JSON.stringify(data));
};

export const getDataSettings = type => {
  let data = JSON.parse(localStorage.getItem('data')) || {};
  return data[type] || {};
};

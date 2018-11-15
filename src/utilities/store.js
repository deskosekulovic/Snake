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

export const saveData = (name, points, speed, size) => {
  const columns = ((data || {})[size] || {})[speed];
  data = {
    ...data,
    [size]: {
      ...data[size],
      [speed]: { ...columns, [points]: name }
    }
  };
  localStorage.setItem('data', JSON.stringify(data));
};

export const getDataSettings = type => {
  let data = JSON.parse(localStorage.getItem('data')) || {};
  return data[type] || {};
};

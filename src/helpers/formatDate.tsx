const formatDate = (date: string) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const convertedDate = new Date(date);
  return convertedDate.toLocaleDateString('en-US', options);
};

export default formatDate;

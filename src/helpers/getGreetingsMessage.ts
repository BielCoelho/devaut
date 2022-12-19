export const getGreetingsMessage = () => {
  const day = new Date();
  const currentHour = day.getHours();

  if (currentHour < 12) {
    return 'Bom dia';
  } else if (currentHour < 18) {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
};

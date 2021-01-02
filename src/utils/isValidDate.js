const isValidDate = (s) => {
  // validates for MM/DD/YYYY
  if (!/^\d\d\/\d\d\/\d\d\d\d$/.test(s)) return false;

  const parts = s.split("/").map((p) => parseInt(p, 10));
  parts[0] -= 1;
  const d = new Date(parts[2], parts[0], parts[1]);
  return (
    d.getMonth() === parts[0] &&
    d.getDate() === parts[1] &&
    d.getFullYear() === parts[2]
  );
};

export default isValidDate;

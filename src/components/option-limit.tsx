interface OptionLimitProps {
  value: number;
}

export const OptionLimit = ({ value }: OptionLimitProps) => {
  return <option value={value}>{value}</option>;
};

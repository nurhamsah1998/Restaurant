export const FormatCurrency = params => {
  const resultAfterFormating = Number(params).toLocaleString('en-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  const toRp = resultAfterFormating.replace('IDR', 'Rp');
  return toRp;
};

export default function FormatNumberChange(params) {
  const rawData = params?.replace(/,/g, '');
  const cookData = rawData.replace('Rp', '');
  return Number(cookData);
}

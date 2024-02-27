export const MinMax = {
  id: [1, 20],
  pageLimit: [1, 100],
  pageCount: [1, 99999999],
  latitude: [-85.05113, 85.05113],
  longitude: [-180.0, 180.0],
  name: [1, 100],
  token: [10, 200],
  email: [8, 100],
  phoneNumber: [8, 20],
  password: [8, 100],
  referralCode: [8, 1000],
  feedback: [1, 1000]
}

export const Patterns = {
  ValidLetters: (
    '^[-A-Za-z0-9_-àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý'
    + 'ÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ ]*$'
  ).normalize('NFC'),
  PhoneNumber: /^\d{9,11}$/,
  Email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
}

export const COUNTRY_CODE = 'VN'

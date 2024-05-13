let accounts = [
  { userName: "kha", password: "kha 123" },
  { userName: "ha", password: "ha 123" },
  { userName: "ta", password: "ta123" },
];

function findAccountWithSpace() {
  let accountsWithSpace = accounts.filter((account) =>
    account.password.includes(" ")
  );
  if (accountsWithSpace.length > 0) {
    accountsWithSpace.forEach((account, index) => {
      console.log(`Tài khoản: ${account.userName}, Vị trí: ${index}`);
    });
  } else {
    console.log(
      "Tất cả tài khoản đều hợp lệ và không có mật khẩu chứa dấu cách."
    );
  }
}

findAccountWithSpace();

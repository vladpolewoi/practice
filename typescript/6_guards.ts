function strict(x: string | number)  {
  if (typeof x === 'number') {
    return x.toFixed();
  } else {
    return x.trim();
  }
}

class MyResponse {
  header: string = 'response header';
  result: string = 'response result';
}

class MyError {
  header: string = 'error header';
  message: string = 'error message';
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType) {}

setAlertType('success');
setAlertType('danger');

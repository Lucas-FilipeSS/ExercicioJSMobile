// window.onload = 
function notifyMe() {
  if (!("Notification" in window)) {
    alert("Este browser não suporta notificações de Desktop");
  }

  else if (Notification.permission === "granted") {
    let notification = new Notification("Aula de Mobile do Professor Ramon");
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        let notification = new Notification("Aula de Mobile do Professor Ramon");
      }
    });
  }
}

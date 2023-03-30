const textPressUntil = "Aperte até o "

export default function useHomeNextCheckpoint(counter: number, checkPointSecret: number, checkPoints: number[]){
    var nextCheckpoint = ""
    var checkPointCounter = 0
    var secret = false

    for (var i = 0; i < checkPoints.length; i++) {
        if (counter < checkPoints[i]){
            checkPointCounter = checkPoints[i]
            break;
        }
    }

    if (counter >= checkPointSecret) {
        nextCheckpoint = "Chegou ao segredo! É meu telefone, fique a vontade para me enviar qualquer mensagem :)"
        secret = true
    } else if (checkPointCounter == 0) nextCheckpoint = "Você chegou ao final!(?)"
    else nextCheckpoint = textPressUntil + checkPointCounter

    return {
        nextCheckpoint,
        secret
    }
}

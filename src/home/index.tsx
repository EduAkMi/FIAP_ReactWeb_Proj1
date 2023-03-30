// UseCases
import useDisplay from "./hooks/useHomeDisplay"
import useIncrement from "./hooks/useHomeIncrement";
import useNextCheckpoint from "./hooks/useHomeNextCheckpoint";

// Styles
import { Container, TextHello, TextPressUntil } from "./styles";

const CHECKPOINT_NAME = 1
const CHECKPOINT_AGE = 3
const CHECKPOINT_RESIDENT = 5
const CHECKPOINT_PROFESSION = 9
const CHECKPOINT_GITHUB = 12
const CHECKPOINT_HOBBIES = 15
const CHECKPOINT_RECOMMENDATIONS = 20
const CHECKPOINT_SECRET = 50

function Home() {

    const { 
        increment,
        count
    } = useIncrement()
    
    const {
        nextCheckpoint,
        secret
    } = useNextCheckpoint(
        count,
        CHECKPOINT_SECRET,
        new Array(
            CHECKPOINT_NAME, CHECKPOINT_AGE, CHECKPOINT_RESIDENT, CHECKPOINT_PROFESSION, 
            CHECKPOINT_GITHUB, CHECKPOINT_HOBBIES, CHECKPOINT_RECOMMENDATIONS
        )
    )

    const name = useDisplay(CHECKPOINT_NAME, count, "", "Eduardo Misina, muito prazer")
    const age = useDisplay(CHECKPOINT_AGE, count, "Idade", "29")
    const resident = useDisplay(CHECKPOINT_RESIDENT, count, "Mora em", "Campinas")
    const profession = useDisplay(CHECKPOINT_PROFESSION, count, "Profissão", "Desenvolvedor Android")
    const github = useDisplay(CHECKPOINT_GITHUB, count, "Github", "https://github.com/EduAkMi")
    const hobbies = useDisplay(CHECKPOINT_HOBBIES, count, "Hobbies", "Passear com as cachorras, tocar violão e pensar em ideias para app ")
    const recommendations = useDisplay(CHECKPOINT_RECOMMENDATIONS, count, "Recomendação de filmes", "A Baleia, Interstellar, Amadeus")

    return (
        <Container>
            <TextHello>Olá, meu nome é...</TextHello>
            { name.display ? <img src="https://media.licdn.com/dms/image/C4D03AQEIgjcjqtTVsw/profile-displayphoto-shrink_800_800/0/1645537087244?e=1685577600&v=beta&t=xA0uT-DwVGR1k_dvkdcQDNJvYIDyas8mwuMAS1beZLU"/> : null}
            { name.display ? <h2>{name.value}</h2> : null}
            { age.display ? <h2>{age.prefix}: {age.value}</h2> : null}
            { resident.display ? <h2>{resident.prefix}: {resident.value}</h2> : null}
            { profession.display ? <h2>{profession.prefix}: {profession.value}</h2> : null}
            { github.display ? <div>
                <h2>{github.prefix}: </h2> <a href={github.value} target="_blank">{github.value}</a>
            </div> : null}
            { hobbies.display ? <h2>{hobbies.prefix}: {hobbies.value}</h2> : null}
            { recommendations.display ? <h2>{recommendations.prefix}: {recommendations.value}</h2> : null}
            { secret ? <h2>Telefone: 16 99623-1182</h2> : null}

            <button onClick={() => increment(1)}>Quer saber mais?<br/>{count}</button>

            <TextPressUntil>{nextCheckpoint}</TextPressUntil>
        </Container>
    );
}

export { Home };
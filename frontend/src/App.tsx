import "./App.css";
import { useLeguesData } from "./hooks/useLeaguesData";

function App() {
  const { data: leagues, isLoading, error } = useLeguesData();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados.</p>;

  return (
    <div>
      <main>
        <div>
          <div>
            {leagues.map((league: any) => (
              <div key={league.id}>
                <div />
                <div>
                  <div>
                    <img
                      src={league.image_path}
                      alt={`Logo da ${league.name}`}
                    />
                  </div>
                  <h3>
                    {league.name}
                  </h3>
                  <div>
                    <p>
                      <span>Código:</span> {league.short_code}
                    </p>
                    <p>
                      <span>Esporte:</span> {league.sport.name}
                    </p>
                    <p>
                      <span>Último Jogo:</span>{" "}
                      {new Date(league.last_played_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
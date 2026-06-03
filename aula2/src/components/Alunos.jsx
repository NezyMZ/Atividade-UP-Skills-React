import { FaUsers } from "react-icons/fa";
export default function Alunos({alunos}) {

    return (
        <>
            <h1 id="titulo-page">Saracuruna Up Skills</h1>
            <div class="linha-horizontal"></div>
            <div className="titulo-table">
            <FaUsers/>
            <h2>Lista de Alunos</h2>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>Matricula</th>
                    <th>Nome</th>
                    <th>Media</th>
                    <th>Pendências</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map(aluno => (
                            <tr key={aluno.matricula}>
                                <td className="table-body">{aluno.matricula}</td>
                                <td className="table-body">{aluno.nome}</td>
                                <td className="table-body">{aluno.media}</td>
                                <td className="table-body">{aluno.pendencia ? 'Sim' : 'Não'}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
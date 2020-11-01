function MemberTable({ members }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {members.map((member, index) => {
                    console.log(member)
                    return (
                        <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.age}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

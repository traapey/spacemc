exports.run = async (client, message, args) => {
    let role = message.member.roles.find(r => r.id === "570361708791595019")
    if (!role) {
        message.guild.member(message.author).addRole('570361708791595019')
    } else {
        message.guild.member(message.author).removeRole('570361708791595019')
    }

}

const CancelledTurns = require("../../DB/models/CancelledTurns");
const User = require("../../DB/models/User");

const noNullCancelledController = async (turnsCancelled, month, day, emailCancelator) => {
  try {
    const emailsToSearch = turnsCancelled.map((turnCancelled) => turnCancelled.email);
    const existingUsers = await User.find({ email: { $in: emailsToSearch } }); // ojo, no poner array de objetos
      
        for (const turnCancelled of turnsCancelled) {
            const { email, ini, fin } = turnCancelled;
      
            const existingUser = existingUsers.find((user) => user.email === email);
      
            if (existingUser) {

              const newTurnCancelled = new CancelledTurns({
                month,
                day,
                /* name: existingUser.name,  aca iria el name cuando tengamos */
                email,
                phone: existingUser.phone ? existingUser.phone : "no requerido",
                turn: {
                  ini,
                  fin,
                },
                howCancelled: emailCancelator,
              });
              await newTurnCancelled.save();
            }
          }
    return true;
  } catch (error) {
    console.error("Error al crear en el modelo de turnos cancelados:", error);
    throw new Error("error al pasar a los cancelados", error)
  }
};

module.exports = noNullCancelledController;

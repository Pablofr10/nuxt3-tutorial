export default oauth.auth0EventHandler({
  async onSuccess(event, { user, tokens }) {
    console.log(user);
    await setUserSession(event, {
      user: {
        id: user.id,
        email: user.email,
        urlFoto: user.picture,
        nome: String(user.name).trim(),
      },
    });

    return sendRedirect(event, "/");
  },
  onError(event, error) {
    console.log("Erro Google Auth", error);
    return sendRedirect(event, "/");
  },
});

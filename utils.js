const logHistory = (req, res, next) => {
    let { history } = req.session;
    if (!history) {
      history = [];
      req.session.history = history;
    }
    console.log(history.length)
    if(history.length > 6){
        history = history.slice(0,3)
        req.session.history = history
    }


    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

    if(url.includes('api')){
      next()
      return
    }

    history.unshift(url);
    console.log(history)
    next();
  };

  module.exports = {logHistory}

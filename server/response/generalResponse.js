const generalResponse = (status='fail',message='') =>{
  return {
    status: status,
    message: message
  };

};

module.exports = {generalResponse};
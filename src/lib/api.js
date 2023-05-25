export const sendContactForm = async (data) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send message');
    return res.json();
  });

export const sendCandidateForm = async (formData) => {
  try {
    const response = await fetch('/api/candidate', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    return response;
  } catch (error) {
    console.log('ESTE', error);
  }
};

/*export const sendCandidateForm = async (formData) => {
  fetch('/api/candidate', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type':
        'multipart/form-data; charset=utf-8; boundary="----arbitrary boundary"',
    },
  })
    .then((res) => {
      console.log('RES', res);
      //if (!res.ok) throw new Error('Failed to send message');
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};*/

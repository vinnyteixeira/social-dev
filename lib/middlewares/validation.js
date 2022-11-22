import WithJoi from "next-joi";

export default WithJoi({
  onValidationError: (req, res, error) => {
    return res.status(400).send(error.details);
  },
});

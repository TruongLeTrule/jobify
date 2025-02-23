const SubmitBtn = ({ isSubmitting }) => {
  return (
    <button className="btn btn-block" type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'submitting...' : 'submit'}
    </button>
  )
}

export default SubmitBtn

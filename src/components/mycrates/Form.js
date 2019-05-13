import React from 'react'

const Form = ({ handleChange, handleSubmit, data, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            name="name"
            placeholder="eg: Nerdy box!"
            onChange={handleChange}
            value={data.name || ''}
          />
        </div>
        {errors.name && <div className="help is-danger">{errors.name}</div>}
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            name="image"
            placeholder="eg: https://nerdcrate.com/1234.png"
            onChange={handleChange}
            value={data.image || ''}
          />
        </div>
        {errors.image && <div className="help is-danger">{errors.image}</div>}
      </div>
      <div className="field">
        <label className="label">Size</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              name="total"
              onChange={handleChange}
              value={data.total || ''}
            >
              <option value="" disabled>Please choose...</option>
              <option value="3">Small</option>
              <option value="6">Medium</option>
              <option value="9">Large</option>
            </select>
          </div>
        </div>
        {errors.total && <div className="help is-danger">{errors.total}</div>}
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default Form

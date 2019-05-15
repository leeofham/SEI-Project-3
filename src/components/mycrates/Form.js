import React from 'react'

const Form = ({ handleChange, handleSubmit, data, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name your dream crate</label>
        <div className="control">
          <input
            className="input"
            name="name"
            placeholder="eg: Limited edition Lord of The Rings!"
            onChange={handleChange}
            value={data.name || ''}
          />
        </div>
        {errors.name && <div className="help is-danger">{errors.name}</div>}
      </div>
      <div className="field">
        <label className="label">Size of box</label>
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
      <div className="field">
        <label className="label">Genre or Category</label>
        <div className="control">
          <input
            className="input"
            name="category"
            placeholder="eg: Lord of The Ring"
            onChange={handleChange}
            value={data.category || ''}
          />
        </div>
        {errors.image && <div className="help is-danger">{errors.image}</div>}
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input
            className="textarea"
            name="description"
            placeholder="This is my Lord of The Rings box containing limited edition Lord of The Rings merch!"
            onChange={handleChange}
            value={data.description || ''}
          />
        </div>
        {errors.image && <div className="help is-danger">{errors.image}</div>}
      </div>

      <button className="buttonNew">Submit</button>
    </form>
  )
}

export default Form

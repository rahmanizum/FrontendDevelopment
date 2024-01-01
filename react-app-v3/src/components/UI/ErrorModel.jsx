import React from 'react'

//className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
const ErrorModel = () => {
    return (
        <div>    
          {/* Modal */}
          <div className="modal fade" id="errorModal" tabIndex="-1" aria-labelledby="errorModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="errorModalLabel">Something Went Wrong </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquid id aspernatur ab quaerat quasi?
                  {/* ... */}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ErrorModel

// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getAllBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamp with ID: ${req.params.id}` });
}

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private // means you need token or have to be logged in 
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Created new bootcamp` });
}

// @desc        Update single bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private 
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Updated bootcamp with ID: ${req.params.id}` });
}

// @desc        Delete specified bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private 
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Deleted bootcamp with ID: ${req.params.id}` });
}
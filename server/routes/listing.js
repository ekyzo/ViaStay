const router = require("express").Router();
const multer = require("multer");

const Listing = require("../models/Listing");
const User = require("../models/User");

/* Configuration Multer for File Upload */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

/* CREATE LISTING */
router.post("/create", upload.array("listingPhotos"), async (req, res) => {
  try {
    /* Take the information from the form */
    const {
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    } = req.body;

    const listingPhotos = req.files;

    if (!listingPhotos) {
      return res.status(400).send("No file uploaded.");
    }

    const listingPhotoPaths = listingPhotos.map((file) => file.path);

    const newListing = new Listing({
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      listingPhotoPaths,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    });

    await newListing.save();

    res.status(200).json(newListing);
  } catch (err) {
    res
      .status(409)
      .json({ message: "Fail to create Listing", error: err.message });
    console.log(err);
  }
});

/* GET LISTING BY ID FOR EDITING */
router.get("/edit/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    const listing = await Listing.findById(listingId).populate("creator");

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.status(200).json(listing);
  } catch (err) {
    res.status(404).json({ message: "Listing not found", error: err.message });
  }
});

/* UPDATE LISTING */
router.put(
  "/edit/:listingId",
  upload.array("listingPhotos"),
  async (req, res) => {
    try {
      const { listingId } = req.params;

      // Check if listing exists
      const existingListing = await Listing.findById(listingId);
      if (!existingListing) {
        return res.status(404).json({ message: "Listing not found" });
      }

      // Prepare update data
      const updateData = {
        category: req.body.category,
        type: req.body.type,
        streetAddress: req.body.streetAddress,
        aptSuite: req.body.aptSuite,
        city: req.body.city,
        province: req.body.province,
        country: req.body.country,
        guestCount: req.body.guestCount,
        bedroomCount: req.body.bedroomCount,
        bedCount: req.body.bedCount,
        bathroomCount: req.body.bathroomCount,
        amenities: req.body.amenities,
        title: req.body.title,
        description: req.body.description,
        highlight: req.body.highlight,
        highlightDesc: req.body.highlightDesc,
        price: req.body.price,
      };

      // If new photos are uploaded, update photo paths
      if (req.files && req.files.length > 0) {
        updateData.listingPhotoPaths = req.files.map((file) => file.path);
      }

      const updatedListing = await Listing.findByIdAndUpdate(
        listingId,
        updateData,
        { new: true, runValidators: true }
      ).populate("creator");

      res.status(200).json(updatedListing);
    } catch (err) {
      console.error("Update listing error:", err);
      res
        .status(400)
        .json({ message: "Failed to update listing", error: err.message });
    }
  }
);

/* GET lISTINGS BY CATEGORY */
router.get("/", async (req, res) => {
  const qCategory = req.query.category;

  try {
    let listings;
    if (qCategory) {
      listings = await Listing.find({ category: qCategory }).populate(
        "creator"
      );
    } else {
      listings = await Listing.find().populate("creator");
    }

    res.status(200).json(listings);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Fail to fetch listings", error: err.message });
    console.log(err);
  }
});

/* GET LISTINGS BY SEARCH */
router.get("/search/:search", async (req, res) => {
  const { search } = req.params;

  try {
    let listings = [];

    if (search === "all") {
      listings = await Listing.find().populate("creator");
    } else {
      listings = await Listing.find({
        $or: [
          { category: { $regex: search, $options: "i" } },
          { title: { $regex: search, $options: "i" } },
        ],
      }).populate("creator");
    }

    res.status(200).json(listings);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Fail to fetch listings", error: err.message });
    console.log(err);
  }
});

/* LISTING DETAILS */
router.get("/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    const listing = await Listing.findById(listingId).populate("creator");
    res.status(200).json(listing);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Listing can not found!", error: err.message });
  }
});

/* DELETE LISTING */
router.delete("/:id", async (req, res) => {
  try {
    const deletedListing = await Listing.findByIdAndDelete(req.params.id);
    if (!deletedListing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete listing." });
  }
});

module.exports = router;

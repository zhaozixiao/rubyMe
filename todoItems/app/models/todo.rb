class Todo < ApplicationRecord
  enum status: {
    active: "ACTIVE",
    complete: "COMPLETE",
    deleted: "DELETED"
  }
end
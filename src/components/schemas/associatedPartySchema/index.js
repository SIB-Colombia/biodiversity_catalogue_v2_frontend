const associatedPartySchema = {
  "schema": {
    "type": "object",
    "title": "Comment",
    "properties": {
      "name": {
        "title": "Nombre",
        "type": "string",
        "default": "Leonardo R"
      },
      "email": {
        "title": "Email",
        "type": "string",
        "pattern": "^\\S+@\\S+$",
        "validationMessage": "Email must be of proper format: example@example",
        "description": "Email will be used for evil."
      },
      "environment": {
        "type": "string",
        "title": "Environment",
        "enum": [
          "LOCAL",
          "SIT1",
          "SIT2",
          "SIT3",
          "UAT1",
          "UAT2"
        ]
      },
      "comment": {
        "title": "Comment",
        "type": "string",
        "maxLength": 20,
        "validationMessage": "Don't be greedy! 20 Characters max please :)",
        "description": "Please write your comment here."
      }
    },
    "required": ["name", "email", "comment"]
  },
  "form": [
    "name",
    "email",
    "environment", {
      "key": "comment",
      "type": "textarea",
      "placeholder": "Make a comment"
    }
  ]
}

export default associatedPartySchema;

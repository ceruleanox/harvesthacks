

{
    "description": "Simple Survey",
    "states": [
      {
        "name": "Trigger",
        "type": "trigger",
        "transitions": [
          {
            "next": "send_and_reply_1",
            "event": "incomingMessage"
          },
          {
            "event": "incomingCall"
          },
          {
            "event": "incomingConversationMessage"
          },
          {
            "event": "incomingRequest"
          },
          {
            "event": "incomingParent"
          }
        ],
        "properties": {
          "offset": {
            "x": -1450,
            "y": -740
          }
        }
      },
      {
        "name": "send_and_reply_1",
        "type": "send-and-wait-for-reply",
        "transitions": [
          {
            "next": "split_1",
            "event": "incomingMessage"
          },
          {
            "event": "timeout"
          },
          {
            "event": "deliveryFailure"
          }
        ],
        "properties": {
          "offset": {
            "x": -2100,
            "y": -870
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "body": "Hello, welcome to our automated meal planning system! If you would like to RSVP, users preferences for your event respond with START. If you are an attendee, please respond with your events four digit pin. For a live response, respond with OTHER! (msg & data rates may apply)",
          "timeout": "3600"
        }
      },
      {
        "name": "split_1",
        "type": "split-based-on",
        "transitions": [
          {
            "event": "noMatch"
          },
          {
            "next": "send_and_reply_2",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "If value matches_any_of START, Start, start,",
                "arguments": [
                  "{{widgets.send_and_reply_1.inbound.Body}}"
                ],
                "type": "matches_any_of",
                "value": "START, Start, start,"
              }
            ]
          },
          {
            "next": "split_7",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "If value less_than 10000",
                "arguments": [
                  "{{widgets.send_and_reply_1.inbound.Body}}"
                ],
                "type": "less_than",
                "value": "10000"
              }
            ]
          },
          {
            "next": "send_and_reply_6",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "If value matches_any_of Help, HELP, HELP!, help, Help!",
                "arguments": [
                  "{{widgets.send_and_reply_1.inbound.Body}}"
                ],
                "type": "matches_any_of",
                "value": "Help, HELP, HELP!, help, Help!, z, OTHER, "
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.send_and_reply_1.inbound.Body}}",
          "offset": {
            "x": -1820,
            "y": -560
          }
        }
      },
      {
        "name": "send_and_reply_2",
        "type": "send-and-wait-for-reply",
        "transitions": [
          {
            "next": "split_2",
            "event": "incomingMessage"
          },
          {
            "event": "timeout"
          },
          {
            "event": "deliveryFailure"
          }
        ],
        "properties": {
          "offset": {
            "x": -2160,
            "y": -180
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "body": "PLEASE SET A 4 DEGIT PIN!",
          "timeout": "3600"
        }
      },
      {
        "name": "split_2",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "send_message_5",
            "event": "noMatch"
          },
          {
            "next": "split_6",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "If value equal_to 10000",
                "arguments": [
                  "{{widgets.send_and_reply_2.inbound.Body}}"
                ],
                "type": "less_than",
                "value": "10000"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.send_and_reply_2.inbound.Body}}",
          "offset": {
            "x": -1610,
            "y": -290
          }
        }
      },
      {
        "name": "send_and_reply_3",
        "type": "send-and-wait-for-reply",
        "transitions": [
          {
            "next": "split_3",
            "event": "incomingMessage"
          },
          {
            "event": "timeout"
          },
          {
            "event": "deliveryFailure"
          }
        ],
        "properties": {
          "offset": {
            "x": -710,
            "y": 280
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "body": "Do you any of the fallowing allergie(s)? (EX. abdg)\na. Shellfish\nb. Gluten\nc. Tree Nut(s)\nd. Egg\ne. Soy\nf. Sesame\ng. Fish\nz. None of the above",
          "timeout": "3600"
        }
      },
      {
        "name": "split_3",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "Copy_of_send_message_7",
            "event": "noMatch"
          },
          {
            "next": "send_and_reply_4",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "If value equal_to a, b, ab, c, ac, bc, ",
                "arguments": [
                  "{{widgets.send_and_reply_3.inbound.Body}}"
                ],
                "type": "is_not_blank",
                "value": "Is Not Blank"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.send_and_reply_3.inbound.Body}}",
          "offset": {
            "x": -1020,
            "y": 560
          }
        }
      },
      {
        "name": "send_and_reply_4",
        "type": "send-and-wait-for-reply",
        "transitions": [
          {
            "next": "split_4",
            "event": "incomingMessage"
          },
          {
            "event": "timeout"
          },
          {
            "event": "deliveryFailure"
          }
        ],
        "properties": {
          "offset": {
            "x": -330,
            "y": -120
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "body": "Do you fallow any of the fallowing deit? (EX. abdg)\nh. Halal\ni. Low Carb\nj. Keto\nk. Kosher\nl. Vegan\nm. Vegetarian\nz. None of the above",
          "timeout": "3600"
        }
      },
      {
        "name": "split_4",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "Copy_2_of_send_message_7",
            "event": "noMatch"
          },
          {
            "next": "send_and_reply_5",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "send_and_reply_2.outbound.Body",
                "arguments": [
                  "{{widgets.send_and_reply_4.inbound.Body}}"
                ],
                "type": "is_not_blank",
                "value": "Is Not Blank"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.send_and_reply_4.inbound.Body}}",
          "offset": {
            "x": -1190,
            "y": 840
          }
        }
      },
      {
        "name": "send_and_reply_5",
        "type": "send-and-wait-for-reply",
        "transitions": [
          {
            "next": "split_5",
            "event": "incomingMessage"
          },
          {
            "next": "send_message_2",
            "event": "timeout"
          },
          {
            "event": "deliveryFailure"
          }
        ],
        "properties": {
          "offset": {
            "x": -110,
            "y": 580
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "body": "Do you have any health concerns in mind when making diet choices? (EX. abdg)  \nn. General Health\no. Brain\np. Cardiovascular\nq. Digestive\nr. Infection\ns. Female Health\nz. None of the above",
          "timeout": "3600"
        }
      },
      {
        "name": "split_5",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "Copy_of_Copy_of_send_message_7",
            "event": "noMatch"
          },
          {
            "next": "send_message_1",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "send_and_reply_2.inbound.Body",
                "arguments": [
                  "{{widgets.send_and_reply_5.inbound.Body}}"
                ],
                "type": "is_not_blank",
                "value": "Is Not Blank"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.send_and_reply_5.inbound.Body}}",
          "offset": {
            "x": -300,
            "y": 210
          }
        }
      },
      {
        "name": "send_message_1",
        "type": "send-message",
        "transitions": [
          {
            "next": "send_message_2",
            "event": "sent"
          },
          {
            "event": "failed"
          }
        ],
        "properties": {
          "offset": {
            "x": 80,
            "y": 30
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "to": "{{contact.channel.address}}",
          "body": "Thankyou, Your event's demographic can be found on our website, Feast-Full.com, by searching your group pin. See RSVP instructions below."
        }
      },
      {
        "name": "send_message_2",
        "type": "send-message",
        "transitions": [
          {
            "event": "sent"
          },
          {
            "event": "failed"
          }
        ],
        "properties": {
          "offset": {
            "x": 280,
            "y": 610
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "to": "{{contact.channel.address}}",
          "body": "Text +1 (205) 882-4108 to RSVP to our event, \"The CIVICODE . This quick survey ensures everyone's food stipulations are effectively accommodated. The Event PIN is:"
        }
      },
      {
        "name": "send_message_3",
        "type": "send-message",
        "transitions": [
          {
            "next": "send_and_reply_3",
            "event": "sent"
          },
          {
            "event": "failed"
          }
        ],
        "properties": {
          "offset": {
            "x": 170,
            "y": 310
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "to": "{{contact.channel.address}}",
          "body": "SUCESSFUL. DO NOT forget your PIN: your guest will need it!"
        }
      },
      {
        "name": "send_message_4",
        "type": "send-message",
        "transitions": [
          {
            "next": "send_and_reply_7",
            "event": "sent"
          },
          {
            "event": "failed"
          }
        ],
        "properties": {
          "offset": {
            "x": -930,
            "y": -80
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "to": "{{contact.channel.address}}",
          "body": "PIN CHECK SUCESSFUL"
        }
      },
      {
        "name": "split_6",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "send_message_4",
            "event": "noMatch"
          },
          {
            "next": "send_message_5",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "USED_PIN(S)",
                "arguments": [
                  "{{widgets.send_and_reply_2.inbound.Body}}"
                ],
                "type": "matches_any_of",
                "value": "6969, 3141, 5555, 1234, 0000, 0001, 4321, 9000, 3000, 9001, 0007, 0420, 0777"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.send_and_reply_2.inbound.Body}}",
          "offset": {
            "x": -1210,
            "y": -40
          }
        }
      },
      {
        "name": "send_message_5",
        "type": "send-message",
        "transitions": [
          {
            "next": "send_and_reply_2",
            "event": "sent"
          },
          {
            "event": "failed"
          }
        ],
        "properties": {
          "offset": {
            "x": -1710,
            "y": 20
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "to": "{{contact.channel.address}}",
          "body": "You have entered an UNAVILABLE PIN!"
        }
      },
      {
        "name": "split_7",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "send_message_3",
            "event": "noMatch"
          },
          {
            "next": "send_message_6",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "USED_PIN(S)",
                "arguments": [
                  "{{widgets.send_and_reply_1.inbound.Body}}"
                ],
                "type": "matches_any_of",
                "value": "1111"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.send_and_reply_1.inbound.Body}}",
          "offset": {
            "x": -1180,
            "y": -310
          }
        }
      },
      {
        "name": "send_message_6",
        "type": "send-message",
        "transitions": [
          {
            "next": "send_and_reply_3",
            "event": "sent"
          },
          {
            "event": "failed"
          }
        ],
        "properties": {
          "offset": {
            "x": -580,
            "y": 40
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "to": "{{contact.channel.address}}",
          "body": "Hello, You must you be attending \"THE CIVICODE\" on NOV7 @ 2AM - 9AM CST! WE WOULD LOVE TO LEARN YOUR DIET PREFRANCES!!! We can then see our catering sugestions on our website in real time by serching your event PIN!!!"
        }
      },
      {
        "name": "Copy_of_send_message_7",
        "type": "send-message",
        "transitions": [
          {
            "next": "send_and_reply_3",
            "event": "sent"
          },
          {
            "event": "failed"
          }
        ],
        "properties": {
          "offset": {
            "x": -1370,
            "y": 340
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "to": "{{contact.channel.address}}",
          "body": "ERROR! Try Agin!"
        }
      },
      {
        "name": "Copy_of_Copy_of_send_message_7",
        "type": "send-message",
        "transitions": [
          {
            "next": "send_and_reply_5",
            "event": "sent"
          },
          {
            "event": "failed"
          }
        ],
        "properties": {
          "offset": {
            "x": -510,
            "y": 420
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "to": "{{contact.channel.address}}",
          "body": "ERROR! Try Agin!"
        }
      },
      {
        "name": "Copy_2_of_send_message_7",
        "type": "send-message",
        "transitions": [
          {
            "next": "send_and_reply_4",
            "event": "sent"
          },
          {
            "event": "failed"
          }
        ],
        "properties": {
          "offset": {
            "x": -1740,
            "y": 250
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "to": "{{contact.channel.address}}",
          "body": "ERROR! Try Agin!"
        }
      },
      {
        "name": "send_and_reply_6",
        "type": "send-and-wait-for-reply",
        "transitions": [
          {
            "next": "split_8",
            "event": "incomingMessage"
          },
          {
            "event": "timeout"
          },
          {
            "event": "deliveryFailure"
          }
        ],
        "properties": {
          "offset": {
            "x": -180,
            "y": -350
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "body": "Do you want to leave a voice mail? (Y or N)",
          "timeout": "3600"
        }
      },
      {
        "name": "split_8",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "send_and_reply_6",
            "event": "noMatch"
          },
          {
            "next": "record_voicemail_1",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "If value matches_any_of Y, y, YES, yes, Yes",
                "arguments": [
                  "{{widgets.send_and_reply_6.inbound.Body}}"
                ],
                "type": "matches_any_of",
                "value": "Y, y, YES, yes, Yes"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.send_and_reply_6.inbound.Body}}",
          "offset": {
            "x": 180,
            "y": -110
          }
        }
      },
      {
        "name": "record_voicemail_1",
        "type": "record-voicemail",
        "transitions": [
          {
            "next": "send_and_reply_1",
            "event": "recordingComplete"
          },
          {
            "next": "send_and_reply_1",
            "event": "noAudio"
          },
          {
            "next": "send_and_reply_1",
            "event": "hangup"
          }
        ],
        "properties": {
          "offset": {
            "x": 620,
            "y": 10
          },
          "timeout": 5,
          "max_length": 3600
        }
      },
      {
        "name": "send_and_reply_7",
        "type": "send-and-wait-for-reply",
        "transitions": [
          {
            "next": "send_and_reply_8",
            "event": "incomingMessage"
          },
          {
            "event": "timeout"
          },
          {
            "event": "deliveryFailure"
          }
        ],
        "properties": {
          "offset": {
            "x": -820,
            "y": -410
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "body": "What is your Event's Name?",
          "timeout": "3600"
        }
      },
      {
        "name": "send_and_reply_8",
        "type": "send-and-wait-for-reply",
        "transitions": [
          {
            "next": "send_message_6",
            "event": "incomingMessage"
          },
          {
            "event": "timeout"
          },
          {
            "event": "deliveryFailure"
          }
        ],
        "properties": {
          "offset": {
            "x": -650,
            "y": -240
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "body": "What DATE(s) is YOUR EVENT!",
          "timeout": "3600"
        }
      }
    ],
    "initial_state": "Trigger",
    "flags": {
      "allow_concurrent_calls": true
    }
  }
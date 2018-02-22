/*
export const shipmentUnit = "\n" +

  "\n" +
  "{\n" +
  "  \"_id\": {\n" +
  "    \"$oid\": \"5a70d6f9ac57912610440aff\"\n" +
  "  },\n" +
  "  \"type\": \"ShipmentUnit\",\n" +
  "  \"path\": \"\\/shipmentUnits:5\\/\",\n" +
  "  \"Name\": \"Amet\",\n" +
  "  \"embedded\": [\n" +
  "    {\n" +
  "      \"parentRelnID\": 32,\n" +
  "      \"parentRelnName\": \"eventHistory\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"Event\",\n" +
  "          \"path\": \"\\/shipmentUnits:5\\/eventHistory:1\\/\",\n" +
  "          \"Name\": \"Lorem\",\n" +
  "          \"dateCreated\": \"Ipsum\",\n" +
  "          \"description\": \"Ipsum\",\n" +
  "          \"_id\": {\n" +
  "            \"$oid\": \"5a70d6f9ac57912610440b00\"\n" +
  "          },\n" +
  "          \"embedded\": [\n" +
  "\n" +
  "          ]\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T23:13:07.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.788453,\n" +
  "          \"geo_latitude\": 48.11365,\n" +
  "          \"geo_precision\": 21,\n" +
  "          \"_id\": \"5049547e-5172-4387-8835-b9b9256670cb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T23:40:40.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.816017,\n" +
  "          \"geo_latitude\": 48.377582,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"1a726176-4ca8-455d-a02f-666bfce4a19b\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T00:18:24.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.991549,\n" +
  "          \"geo_latitude\": 48.603289,\n" +
  "          \"geo_precision\": 19,\n" +
  "          \"_id\": \"a96f163a-953e-44e2-b6bf-609d8f233be2\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T00:45:56.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.216523,\n" +
  "          \"geo_latitude\": 48.829417,\n" +
  "          \"geo_precision\": 7,\n" +
  "          \"_id\": \"286f0a20-a972-45af-b141-c4f9d0b51973\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T22:01:43.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.549732,\n" +
  "          \"geo_latitude\": 47.728006,\n" +
  "          \"geo_precision\": 6,\n" +
  "          \"_id\": \"3b5c38c1-2d51-46d6-95ad-a536ceee4cdb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T22:39:28.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.665319,\n" +
  "          \"geo_latitude\": 47.950702,\n" +
  "          \"geo_precision\": 23,\n" +
  "          \"_id\": \"d4ab5ebb-9a89-48c9-840d-516a129b3520\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T01:19:56.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.44559,\n" +
  "          \"geo_latitude\": 48.99969,\n" +
  "          \"geo_precision\": 11,\n" +
  "          \"_id\": \"4a1798ab-6eb6-4b19-ae27-24d2fac714cb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T01:57:00.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.612538,\n" +
  "          \"geo_latitude\": 49.2849,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"c8f14fc0-53a4-4cbc-8c79-3b362029c32e\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T02:28:37.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.560922,\n" +
  "          \"geo_latitude\": 49.505107,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"5a43836a-3ed6-439a-a8d4-267b8b13b8e9\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T03:00:14.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.594242,\n" +
  "          \"geo_latitude\": 49.86316,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"b369ca54-5663-4e92-b019-459c6d6b2354\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T03:33:13.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.480276,\n" +
  "          \"geo_latitude\": 50.026273,\n" +
  "          \"geo_precision\": 24,\n" +
  "          \"_id\": \"33018dd2-6dcf-4f51-a158-ddf1b5a985c6\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T04:02:48.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.249163,\n" +
  "          \"geo_latitude\": 50.231233,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"7d101e79-65c9-46b5-80f9-7079b87ae96a\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T04:35:26.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.941277,\n" +
  "          \"geo_latitude\": 50.41273,\n" +
  "          \"geo_precision\": 12,\n" +
  "          \"_id\": \"8f01d0ff-a455-49a9-8ddc-f903e0fc3b6b\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T05:08:46.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.722933,\n" +
  "          \"geo_latitude\": 50.504834,\n" +
  "          \"geo_precision\": 20,\n" +
  "          \"_id\": \"1dfbfed6-a543-4553-b8c5-61b289f425ae\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T05:46:10.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.38649,\n" +
  "          \"geo_latitude\": 50.62631,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"b5de2eb1-6141-4ef9-b8f5-1dab24b5eac5\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T06:23:13.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 14,\n" +
  "          \"_id\": \"f34fd52f-1cd3-4a98-aff6-6133d43eae00\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T06:59:16.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 13,\n" +
  "          \"_id\": \"f2c96320-364e-43e1-b72a-fc244fe0e2fd\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T07:37:00.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"fc45228f-ee43-4526-a213-ebb870e23525\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T08:06:14.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"dc543104-1665-4458-96f9-a1f33bc400e4\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T08:34:07.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 22,\n" +
  "          \"_id\": \"1bd0b4b7-e6df-42ac-a813-f6e5659ea7d6\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T09:05:04.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.063672,\n" +
  "          \"geo_latitude\": 50.922367,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"f8728e14-1df7-4b7d-9410-360cb1e72e53\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T09:34:38.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.998203,\n" +
  "          \"geo_latitude\": 51.050598,\n" +
  "          \"geo_precision\": 12,\n" +
  "          \"_id\": \"230a7844-8f05-4f04-a791-a06265eadc79\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T10:10:41.353Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.824513,\n" +
  "          \"geo_latitude\": 51.371196,\n" +
  "          \"geo_precision\": 20,\n" +
  "          \"_id\": \"bd1f6345-71a1-48dc-b8f5-2197bd2f2c66\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T10:44:00.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.82318,\n" +
  "          \"geo_latitude\": 51.53213,\n" +
  "          \"geo_precision\": 17,\n" +
  "          \"_id\": \"28ad9289-dba7-43f1-bced-f8f2b9ebd1cb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T11:24:28.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.625893,\n" +
  "          \"geo_latitude\": 51.710364,\n" +
  "          \"geo_precision\": 11,\n" +
  "          \"_id\": \"7f453867-7ea4-4af3-946a-763350b5b19d\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T11:54:43.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.261053,\n" +
  "          \"geo_latitude\": 51.862473,\n" +
  "          \"geo_precision\": 14,\n" +
  "          \"_id\": \"06067f5f-c62e-421b-a5ff-1a47b46b8f5c\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T12:31:26.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 5.91834,\n" +
  "          \"geo_latitude\": 52.01673,\n" +
  "          \"geo_precision\": 6,\n" +
  "          \"_id\": \"33715c2e-3cf4-405f-b2b1-60e20adc4731\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T13:03:24.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 5.561182,\n" +
  "          \"geo_latitude\": 52.042181,\n" +
  "          \"geo_precision\": 11,\n" +
  "          \"_id\": \"d52a7fc2-051d-4c1f-b096-67402e0e3d20\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T13:41:08.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 5.155927,\n" +
  "          \"geo_latitude\": 52.099616,\n" +
  "          \"geo_precision\": 6,\n" +
  "          \"_id\": \"6bd54d40-0c9a-40b2-841f-f957068ab2d2\"\n" +
  "        }\n" +
  "      ]\n" +
  "    }\n" +
  "  ],\n" +
  "  \"parentID\": {\n" +
  "    \"$oid\": \"5a70d6f8ac57912610440a59\"\n" +
  "  },\n" +
  "  \"parentRelnID\": 19,\n" +
  "  \"parentRelnName\": \"shipmentUnits\",\n" +
  "  \"parentBaseClassID\": 3,\n" +
  "  \"parentBaseClassName\": \"Shipment\",\n" +
  "  \"lastUpdated\": \"2018-01-30T21:28:19.152Z\"\n" +
  "}\n";

export const location = "{\n" +
  "    \"type\": \"Location\",\n" +
  "    \"path\": \"/LogisticsTestbedV12/Locations/5a70d6f8ac57912610440abf\",\n" +
  "    \"Name\": \"Porto Factory\",\n" +
  "    \"iataCode\": \"\",\n" +
  "    \"latitude\": \"\u200e41.145821\",\n" +
  "    \"longitude\": \"-8.613985\",\n" +
  "    \"UNLoCode\": \"PT  PFR \",\n" +
  "    \"altitude\": \"0\",\n" +
  "    \"locationType\": \"UN_LOCODE\",\n" +
  "    \"embedded\": [\n" +
  "        {\n" +
  "            \"parentRelnID\": 115,\n" +
  "            \"parentRelnName\": \"structuredAddress\",\n" +
  "            \"entities\": [\n" +
  "                {\n" +
  "                    \"type\": \"Address\",\n" +
  "                    \"path\": \"/LogisticsTestbedV12/Locations/5a70d6f8ac57912610440abf/structuredAddress/5a70d6f8ac57912610440ac0\",\n" +
  "                    \"Name\": \"Sadipscing\",\n" +
  "                    \"streetName\": \"Lorem\",\n" +
  "                    \"postOfficeBox\": \"Dolor\",\n" +
  "                    \"postCode\": \"Lorem\",\n" +
  "                    \"cityName\": \"Consetetur\",\n" +
  "                    \"cityID\": \"Ipsum\",\n" +
  "                    \"regionCode\": \"Sadipscing\",\n" +
  "                    \"state\": \"Amet\",\n" +
  "                    \"_id\": \"5a70d6f8ac57912610440ac0\",\n" +
  "                    \"embedded\": []\n" +
  "                }\n" +
  "            ]\n" +
  "        }\n" +
  "    ],\n" +
  "    \"parentID\": \"5a70d6f7ac57912610440a4e\",\n" +
  "    \"parentRelnID\": 371,\n" +
  "    \"parentRelnName\": \"Locations\",\n" +
  "    \"parentBaseClassName\": \"LogisticsTestbedV12\",\n" +
  "    \"lastUpdated\": \"2018-01-31T13:51:49.306Z\",\n" +
  "    \"id\": \"5a70d6f8ac57912610440abf\"\n" +
  "}";

export const shipment = "{\n" +
  "    \"type\": \"Shipment\",\n" +
  "    \"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59\",\n" +
  "    \"ATA\": \"2016/12/16 04:00:00\",\n" +
  "    \"ATD\": \"2016/12/14 05:30:00\",\n" +
  "    \"ETA\": \"2016/12/16 02:30:00\",\n" +
  "    \"ETD\": \"2016/12/14 04:30:00\",\n" +
  "    \"Name\": \"SHP1\",\n" +
  "    \"natureOfGoods\": \"Wood\",\n" +
  "    \"shipmentID\": \"SHP1\",\n" +
  "    \"totalGrossVolume\": 264,\n" +
  "    \"totalGrossWeight\": 90,\n" +
  "    \"totalPackage\": 660,\n" +
  "    \"totalPieces\": 66,\n" +
  "    \"shipmentType\": \"HouseBillOfLading\",\n" +
  "    \"embedded\": [\n" +
  "        {\n" +
  "            \"parentRelnID\": 18,\n" +
  "            \"parentRelnName\": \"routeStages\",\n" +
  "            \"entities\": [\n" +
  "                {\n" +
  "                    \"type\": \"obs_RouteStage\",\n" +
  "                    \"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59/routeStages/5a70d6f8ac57912610440a5a\",\n" +
  "                    \"ATA\": \"2016/12/15 05:30:00\",\n" +
  "                    \"ATD\": \"2016/12/14 05:30:00\",\n" +
  "                    \"ETA\": \"2016/12/15 04:30:00\",\n" +
  "                    \"ETD\": \"2016/12/14 04:30:00\",\n" +
  "                    \"Name\": \"RouteStage1\",\n" +
  "                    \"sequenceNumber\": 1,\n" +
  "                    \"risk\": \"medium\",\n" +
  "                    \"status\": \"planned\",\n" +
  "                    \"_id\": \"5a70d6f8ac57912610440a5a\",\n" +
  "                    \"embedded\": [\n" +
  "                        {\n" +
  "                            \"parentRelnID\": 50,\n" +
  "                            \"parentRelnName\": \"milestones\",\n" +
  "                            \"entities\": [\n" +
  "                                {\n" +
  "                                    \"type\": \"Milestone\",\n" +
  "                                    \"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59/routeStages/5a70d6f8ac57912610440a5a/milestones/5a70d6f8ac57912610440a5b\",\n" +
  "                                    \"Name\": \"Sadipscing\",\n" +
  "                                    \"dateEstimated\": \"1977/12/16\",\n" +
  "                                    \"dateActual\": \"2012/02/05\",\n" +
  "                                    \"_id\": \"5a70d6f8ac57912610440a5b\",\n" +
  "                                    \"embedded\": [\n" +
  "                                        {\n" +
  "                                            \"parentRelnID\": 60,\n" +
  "                                            \"parentRelnName\": \"eventHistory\",\n" +
  "                                            \"entities\": [\n" +
  "                                                {\n" +
  "                                                    \"type\": \"Event\",\n" +
  "                                                    \"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59/routeStages/5a70d6f8ac57912610440a5a/milestones/5a70d6f8ac57912610440a5b/eventHistory/5a70d6f8ac57912610440a5c\",\n" +
  "                                                    \"Name\": \"Amet\",\n" +
  "                                                    \"dateCreated\": \"Ipsum\",\n" +
  "                                                    \"description\": \"Lorem\",\n" +
  "                                                    \"_id\": \"5a70d6f8ac57912610440a5c\",\n" +
  "                                                    \"embedded\": []\n" +
  "                                                }\n" +
  "                                            ]\n" +
  "                                        }\n" +
  "                                    ]\n" +
  "                                }\n" +
  "                            ]\n" +
  "                        },\n" +
  "                        {\n" +
  "                            \"parentRelnID\": 51,\n" +
  "                            \"parentRelnName\": \"eventHistory\",\n" +
  "                            \"entities\": [\n" +
  "                                {\n" +
  "                                    \"type\": \"Event\",\n" +
  "                                    \"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59/routeStages/5a70d6f8ac57912610440a5a/eventHistory/5a70d6f8ac57912610440a5d\",\n" +
  "                                    \"Name\": \"Dolor\",\n" +
  "                                    \"dateCreated\": \"Amet\",\n" +
  "                                    \"description\": \"Consetetur\",\n" +
  "                                    \"_id\": \"5a70d6f8ac57912610440a5d\",\n" +
  "                                    \"embedded\": []\n" +
  "                                }\n" +
  "                            ]\n" +
  "                        }\n" +
  "                    ],\n" +
  "\t\t\t\t\t\"associations\": [\n" +
  "\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\"relnID\": 28,\n" +
  "\t\t\t\t\t\t\t\"relnName\": \"to\",\n" +
  "\t\t\t\t\t\t\t\"data\": [\n" +
  "\t\t\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\t\t\"_id\": \"5a70d6f8ac57912610440ac1\",\n" +
  "\t\t\t\t\t\t\t\t\t\"type\": \"Location\",\n" +
  "\t\t\t\t\t\t\t\t\t\"desc\": \"\"\n" +
  "\t\t\t\t\t\t\t\t}\n" +
  "\t\t\t\t\t\t\t]\n" +
  "\t\t\t\t\t\t},\n" +
  "\t\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\"relnID\": 29,\n" +
  "\t\t\t\t\t\t\t\"relnName\": \"from\",\n" +
  "\t\t\t\t\t\t\t\"data\": [\n" +
  "\t\t\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\t\t\"_id\": \"5a70d6f8ac57912610440abf\",\n" +
  "\t\t\t\t\t\t\t\t\t\"type\": \"Location\",\n" +
  "\t\t\t\t\t\t\t\t\t\"desc\": \"\"\n" +
  "\t\t\t\t\t\t\t\t}\n" +
  "\t\t\t\t\t\t\t]\n" +
  "\t\t\t\t\t\t}\n" +
  "\t\t\t\t\t\t]\n" +
  "                },\n" +
  "                {\n" +
  "                    \"type\": \"obs_RouteStage\",\n" +
  "                    \"_id\": \"f10d2e94-0447-48c4-82b2-d78891468b57\",\n" +
  "                    \"ATA\": \"2016/12/15 18:45:00\",\n" +
  "                    \"ATD\": \"2016/12/15 06:45:00\",\n" +
  "                    \"ETA\": \"2016/12/15 18:45:00\",\n" +
  "                    \"ETD\": \"2016/12/15 06:30:00\",\n" +
  "                    \"Name\": \"RouteStage2\",\n" +
  "                    \"sequenceNumber\": \"2\",\n" +
  "                    \"risk\": \"medium\",\n" +
  "                    \"status\": \"planned\",\n" +
  "                    \"embedded\": [\n" +
  "                        {\n" +
  "                            \"parentRelnID\": 50,\n" +
  "                            \"parentRelnName\": \"milestones\",\n" +
  "                            \"entities\": [\n" +
  "                                {\n" +
  "                                    \"type\": \"Milestone\",\n" +
  "                                    \"_id\": \"3c74ea6a-76eb-4a8d-ab7a-9cddee060241\",\n" +
  "                                    \"Name\": \"'text'\",\n" +
  "                                    \"dateEstimated\": \"\\\"2018-1-30 00:31:40\\\"\",\n" +
  "                                    \"dateActual\": \"\\\"2018-1-30 00:31:40\\\"\",\n" +
  "                                    \"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59/routeStages/f10d2e94-0447-48c4-82b2-d78891468b57/milestones/3c74ea6a-76eb-4a8d-ab7a-9cddee060241\"\n" +
  "                                }\n" +
  "                            ]\n" +
  "                        }\n" +
  "                    ],\n" +
  "\t\t\t\t\t\"associations\": [\n" +
  "\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\"relnID\": 28,\n" +
  "\t\t\t\t\t\t\t\"relnName\": \"to\",\n" +
  "\t\t\t\t\t\t\t\"data\": [\n" +
  "\t\t\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\t\t\"_id\": \"5a70d6f8ac57912610440abd\",\n" +
  "\t\t\t\t\t\t\t\t\t\"type\": \"Location\",\n" +
  "\t\t\t\t\t\t\t\t\t\"desc\": \"\"\n" +
  "\t\t\t\t\t\t\t\t}\n" +
  "\t\t\t\t\t\t\t]\n" +
  "\t\t\t\t\t\t},\n" +
  "\t\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\"relnID\": 29,\n" +
  "\t\t\t\t\t\t\t\"relnName\": \"from\",\n" +
  "\t\t\t\t\t\t\t\"data\": [\n" +
  "\t\t\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\t\t\"_id\": \"5a70d6f8ac57912610440ac1\",\n" +
  "\t\t\t\t\t\t\t\t\t\"type\": \"Location\",\n" +
  "\t\t\t\t\t\t\t\t\t\"desc\": \"\"\n" +
  "\t\t\t\t\t\t\t\t}\n" +
  "\t\t\t\t\t\t\t]\n" +
  "\t\t\t\t\t\t}\n" +
  "\t\t\t\t\t\t],\n" +
  "                    \"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59/routeStages/f10d2e94-0447-48c4-82b2-d78891468b57\"\n" +
  "                },\n" +
  "                {\n" +
  "                    \"type\": \"obs_RouteStage\",\n" +
  "                    \"_id\": \"f81e29cd-e335-4235-8168-51271a047a07\",\n" +
  "                    \"ATA\": \"2016/12/16 04:00:00\",\n" +
  "                    \"ATD\": \"2016/12/15 21:45:00\",\n" +
  "                    \"ETA\": \"2016/12/16 02:30:00\",\n" +
  "                    \"ETD\": \"2016/12/15 20:45:00\",\n" +
  "                    \"Name\": \"RouteStage3\",\n" +
  "                    \"sequenceNumber\": \"3\",\n" +
  "                    \"risk\": \"medium\",\n" +
  "                    \"status\": \"planned\",\n" +
  "\t\t\t\t\t\"associations\": [\n" +
  "\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\"relnID\": 28,\n" +
  "\t\t\t\t\t\t\t\"relnName\": \"to\",\n" +
  "\t\t\t\t\t\t\t\"data\": [\n" +
  "\t\t\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\t\t\"_id\": \"Luxemburg Airport\",\n" +
  "\t\t\t\t\t\t\t\t\t\"type\": \"Location\",\n" +
  "\t\t\t\t\t\t\t\t\t\"desc\": \"\"\n" +
  "\t\t\t\t\t\t\t\t}\n" +
  "\t\t\t\t\t\t\t]\n" +
  "\t\t\t\t\t\t},\n" +
  "\t\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\"relnID\": 29,\n" +
  "\t\t\t\t\t\t\t\"relnName\": \"from\",\n" +
  "\t\t\t\t\t\t\t\"data\": [\n" +
  "\t\t\t\t\t\t\t\t{\n" +
  "\t\t\t\t\t\t\t\t\t\"_id\": \"5a70d6f8ac57912610440abd\",\n" +
  "\t\t\t\t\t\t\t\t\t\"type\": \"Location\",\n" +
  "\t\t\t\t\t\t\t\t\t\"desc\": \"\"\n" +
  "\t\t\t\t\t\t\t\t}\n" +
  "\t\t\t\t\t\t\t]\n" +
  "\t\t\t\t\t\t}\n" +
  "\t\t\t\t\t\t],\n" +
  "\t\t\t\t\t\"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59/routeStages/f81e29cd-e335-4235-8168-51271a047a07\"\n" +
  "\n" +
  "\t\t\t\t}\n" +
  "            ]\n" +
  "        },\n" +
  "        {\n" +
  "            \"parentRelnID\": 20,\n" +
  "            \"parentRelnName\": \"handlingInstructionList\",\n" +
  "            \"entities\": [\n" +
  "                {\n" +
  "                    \"type\": \"HandlingInstruction\",\n" +
  "                    \"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59/handlingInstructionList/5a70d6f8ac57912610440a5e\",\n" +
  "                    \"description\": \"HandlewithCare\",\n" +
  "                    \"code\": \"HC\",\n" +
  "                    \"hiType\": \"OSI\",\n" +
  "                    \"_id\": \"5a70d6f8ac57912610440a5e\",\n" +
  "                    \"embedded\": []\n" +
  "                }\n" +
  "            ]\n" +
  "        },\n" +
  "        {\n" +
  "            \"parentRelnID\": 21,\n" +
  "            \"parentRelnName\": \"signatureList\",\n" +
  "            \"entities\": [\n" +
  "                {\n" +
  "                    \"type\": \"DepSignature\",\n" +
  "                    \"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59/signatureList/5a70d6f8ac57912610440a5f\",\n" +
  "                    \"name\": \"Departure Signature\",\n" +
  "                    \"location\": \"Porto\",\n" +
  "                    \"date\": \"2016/12/14\",\n" +
  "                    \"signatureType\": \"Carrier\",\n" +
  "                    \"_id\": \"5a70d6f8ac57912610440a5f\",\n" +
  "                    \"embedded\": []\n" +
  "                }\n" +
  "            ]\n" +
  "        },\n" +
  "        {\n" +
  "            \"parentRelnID\": 22,\n" +
  "            \"parentRelnName\": \"eventHistory\",\n" +
  "            \"entities\": [\n" +
  "                {\n" +
  "                    \"type\": \"Event\",\n" +
  "                    \"path\": \"/LogisticsTestbedV12/Shipments/5a70d6f8ac57912610440a59/eventHistory/5a70d6f8ac57912610440a60\",\n" +
  "                    \"Name\": \"Consetetur\",\n" +
  "                    \"dateCreated\": \"Dolor\",\n" +
  "                    \"description\": \"Sadipscing\",\n" +
  "                    \"_id\": \"5a70d6f8ac57912610440a60\",\n" +
  "                    \"embedded\": []\n" +
  "                }\n" +
  "            ]\n" +
  "        }\n" +
  "    ],\n" +
  "    \"parentID\": \"5a70d6f7ac57912610440a4e\",\n" +
  "    \"parentRelnID\": 369,\n" +
  "    \"parentRelnName\": \"Shipments\",\n" +
  "    \"parentBaseClassName\": \"LogisticsTestbedV12\",\n" +
  "    \"associations\": [\n" +
  "        {\n" +
  "            \"relnID\": 23,\n" +
  "            \"relnName\": \"weightUnit\",\n" +
  "            \"data\": [\n" +
  "                {\n" +
  "                    \"_id\": \"5a70d6f9ac57912610440eff\",\n" +
  "                    \"type\": \"CommonCodeWeight\",\n" +
  "                    \"desc\": \"\"\n" +
  "                }\n" +
  "            ]\n" +
  "        },\n" +
  "        {\n" +
  "            \"relnID\": 24,\n" +
  "            \"relnName\": \"volumeUnit\",\n" +
  "            \"data\": [\n" +
  "                {\n" +
  "                    \"_id\": \"5a70d6f9ac57912610440ee1\",\n" +
  "                    \"type\": \"CommonCodeVolume\",\n" +
  "                    \"desc\": \"\"\n" +
  "                }\n" +
  "            ]\n" +
  "        },\n" +
  "        {\n" +
  "            \"relnID\": 25,\n" +
  "            \"relnName\": \"currency\",\n" +
  "            \"data\": [\n" +
  "                {\n" +
  "                    \"_id\": \"5a70d6f9ac57912610440eeb\",\n" +
  "                    \"type\": \"ISO3AlphaCurrencyCode\",\n" +
  "                    \"desc\": \"\"\n" +
  "                }\n" +
  "            ]\n" +
  "        },\n" +
  "        {\n" +
  "            \"relnID\": 26,\n" +
  "            \"relnName\": \"destinationLocation\",\n" +
  "            \"data\": [\n" +
  "                {\n" +
  "                    \"_id\": \"5a70d6f8ac57912610440ac3\",\n" +
  "                    \"type\": \"Location\",\n" +
  "                    \"desc\": \"\"\n" +
  "                }\n" +
  "            ]\n" +
  "        },\n" +
  "        {\n" +
  "            \"relnID\": 27,\n" +
  "            \"relnName\": \"originLocation\",\n" +
  "            \"data\": [\n" +
  "                {\n" +
  "                    \"_id\": \"5a70d6f8ac57912610440abf\",\n" +
  "                    \"type\": \"Location\",\n" +
  "                    \"desc\": \"\"\n" +
  "                }\n" +
  "            ]\n" +
  "        }\n" +
  "    ],\n" +
  "    \"id\": \"5a70d6f8ac57912610440a59\"\n" +
  "}\n";

export const shipmentUnits = "[\n" +
  "\n" +
  "{\n" +
  "  \"_id\": {\n" +
  "    \"$oid\": \"5a70d6f9ac57912610440aff\"\n" +
  "  },\n" +
  "  \"type\": \"ShipmentUnit\",\n" +
  "  \"path\": \"\\/shipmentUnits:5\\/\",\n" +
  "  \"Name\": \"Amet\",\n" +
  "  \"embedded\": [\n" +
  "    {\n" +
  "      \"parentRelnID\": 32,\n" +
  "      \"parentRelnName\": \"eventHistory\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"Event\",\n" +
  "          \"path\": \"\\/shipmentUnits:5\\/eventHistory:1\\/\",\n" +
  "          \"Name\": \"Lorem\",\n" +
  "          \"dateCreated\": \"Ipsum\",\n" +
  "          \"description\": \"Ipsum\",\n" +
  "          \"_id\": {\n" +
  "            \"$oid\": \"5a70d6f9ac57912610440b00\"\n" +
  "          },\n" +
  "          \"embedded\": [\n" +
  "\n" +
  "          ]\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T23:13:07.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.788453,\n" +
  "          \"geo_latitude\": 48.11365,\n" +
  "          \"geo_precision\": 21,\n" +
  "          \"_id\": \"5049547e-5172-4387-8835-b9b9256670cb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T23:40:40.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.816017,\n" +
  "          \"geo_latitude\": 48.377582,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"1a726176-4ca8-455d-a02f-666bfce4a19b\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T00:18:24.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.991549,\n" +
  "          \"geo_latitude\": 48.603289,\n" +
  "          \"geo_precision\": 19,\n" +
  "          \"_id\": \"a96f163a-953e-44e2-b6bf-609d8f233be2\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T00:45:56.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.216523,\n" +
  "          \"geo_latitude\": 48.829417,\n" +
  "          \"geo_precision\": 7,\n" +
  "          \"_id\": \"286f0a20-a972-45af-b141-c4f9d0b51973\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T22:01:43.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.549732,\n" +
  "          \"geo_latitude\": 47.728006,\n" +
  "          \"geo_precision\": 6,\n" +
  "          \"_id\": \"3b5c38c1-2d51-46d6-95ad-a536ceee4cdb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T22:39:28.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.665319,\n" +
  "          \"geo_latitude\": 47.950702,\n" +
  "          \"geo_precision\": 23,\n" +
  "          \"_id\": \"d4ab5ebb-9a89-48c9-840d-516a129b3520\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T01:19:56.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.44559,\n" +
  "          \"geo_latitude\": 48.99969,\n" +
  "          \"geo_precision\": 11,\n" +
  "          \"_id\": \"4a1798ab-6eb6-4b19-ae27-24d2fac714cb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T01:57:00.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.612538,\n" +
  "          \"geo_latitude\": 49.2849,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"c8f14fc0-53a4-4cbc-8c79-3b362029c32e\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T02:28:37.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.560922,\n" +
  "          \"geo_latitude\": 49.505107,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"5a43836a-3ed6-439a-a8d4-267b8b13b8e9\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T03:00:14.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.594242,\n" +
  "          \"geo_latitude\": 49.86316,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"b369ca54-5663-4e92-b019-459c6d6b2354\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T03:33:13.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.480276,\n" +
  "          \"geo_latitude\": 50.026273,\n" +
  "          \"geo_precision\": 24,\n" +
  "          \"_id\": \"33018dd2-6dcf-4f51-a158-ddf1b5a985c6\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T04:02:48.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.249163,\n" +
  "          \"geo_latitude\": 50.231233,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"7d101e79-65c9-46b5-80f9-7079b87ae96a\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T04:35:26.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.941277,\n" +
  "          \"geo_latitude\": 50.41273,\n" +
  "          \"geo_precision\": 12,\n" +
  "          \"_id\": \"8f01d0ff-a455-49a9-8ddc-f903e0fc3b6b\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T05:08:46.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.722933,\n" +
  "          \"geo_latitude\": 50.504834,\n" +
  "          \"geo_precision\": 20,\n" +
  "          \"_id\": \"1dfbfed6-a543-4553-b8c5-61b289f425ae\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T05:46:10.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.38649,\n" +
  "          \"geo_latitude\": 50.62631,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"b5de2eb1-6141-4ef9-b8f5-1dab24b5eac5\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T06:23:13.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 14,\n" +
  "          \"_id\": \"f34fd52f-1cd3-4a98-aff6-6133d43eae00\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T06:59:16.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 13,\n" +
  "          \"_id\": \"f2c96320-364e-43e1-b72a-fc244fe0e2fd\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T07:37:00.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"fc45228f-ee43-4526-a213-ebb870e23525\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T08:06:14.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"dc543104-1665-4458-96f9-a1f33bc400e4\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T08:34:07.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 22,\n" +
  "          \"_id\": \"1bd0b4b7-e6df-42ac-a813-f6e5659ea7d6\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T09:05:04.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.063672,\n" +
  "          \"geo_latitude\": 50.922367,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"f8728e14-1df7-4b7d-9410-360cb1e72e53\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T09:34:38.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.998203,\n" +
  "          \"geo_latitude\": 51.050598,\n" +
  "          \"geo_precision\": 12,\n" +
  "          \"_id\": \"230a7844-8f05-4f04-a791-a06265eadc79\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T10:10:41.353Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.824513,\n" +
  "          \"geo_latitude\": 51.371196,\n" +
  "          \"geo_precision\": 20,\n" +
  "          \"_id\": \"bd1f6345-71a1-48dc-b8f5-2197bd2f2c66\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T10:44:00.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.82318,\n" +
  "          \"geo_latitude\": 51.53213,\n" +
  "          \"geo_precision\": 17,\n" +
  "          \"_id\": \"28ad9289-dba7-43f1-bced-f8f2b9ebd1cb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T11:24:28.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.625893,\n" +
  "          \"geo_latitude\": 51.710364,\n" +
  "          \"geo_precision\": 11,\n" +
  "          \"_id\": \"7f453867-7ea4-4af3-946a-763350b5b19d\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T11:54:43.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.261053,\n" +
  "          \"geo_latitude\": 51.862473,\n" +
  "          \"geo_precision\": 14,\n" +
  "          \"_id\": \"06067f5f-c62e-421b-a5ff-1a47b46b8f5c\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T12:31:26.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 5.91834,\n" +
  "          \"geo_latitude\": 52.01673,\n" +
  "          \"geo_precision\": 6,\n" +
  "          \"_id\": \"33715c2e-3cf4-405f-b2b1-60e20adc4731\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T13:03:24.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 5.561182,\n" +
  "          \"geo_latitude\": 52.042181,\n" +
  "          \"geo_precision\": 11,\n" +
  "          \"_id\": \"d52a7fc2-051d-4c1f-b096-67402e0e3d20\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T13:41:08.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 5.155927,\n" +
  "          \"geo_latitude\": 52.099616,\n" +
  "          \"geo_precision\": 6,\n" +
  "          \"_id\": \"6bd54d40-0c9a-40b2-841f-f957068ab2d2\"\n" +
  "        }\n" +
  "      ]\n" +
  "    }\n" +
  "  ],\n" +
  "  \"parentID\": {\n" +
  "    \"$oid\": \"5a70d6f8ac57912610440a59\"\n" +
  "  },\n" +
  "  \"parentRelnID\": 19,\n" +
  "  \"parentRelnName\": \"shipmentUnits\",\n" +
  "  \"parentBaseClassID\": 3,\n" +
  "  \"parentBaseClassName\": \"Shipment\",\n" +
  "  \"lastUpdated\": \"2018-01-30T21:28:19.152Z\"\n" +
  "}\n" +
  ",\n" +
  "\n" +
  "{\n" +
  "  \"_id\": {\n" +
  "    \"$oid\": \"5a70d6f9ac57912610440aff\"\n" +
  "  },\n" +
  "  \"type\": \"ShipmentUnit\",\n" +
  "  \"path\": \"\\/shipmentUnits:5\\/\",\n" +
  "  \"Name\": \"Amet\",\n" +
  "  \"embedded\": [\n" +
  "    {\n" +
  "      \"parentRelnID\": 32,\n" +
  "      \"parentRelnName\": \"eventHistory\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"Event\",\n" +
  "          \"path\": \"\\/shipmentUnits:5\\/eventHistory:1\\/\",\n" +
  "          \"Name\": \"Lorem\",\n" +
  "          \"dateCreated\": \"Ipsum\",\n" +
  "          \"description\": \"Ipsum\",\n" +
  "          \"_id\": {\n" +
  "            \"$oid\": \"5a70d6f9ac57912610440b00\"\n" +
  "          },\n" +
  "          \"embedded\": [\n" +
  "\n" +
  "          ]\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T23:13:07.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.788453,\n" +
  "          \"geo_latitude\": 48.11365,\n" +
  "          \"geo_precision\": 21,\n" +
  "          \"_id\": \"5049547e-5172-4387-8835-b9b9256670cb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T23:40:40.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.816017,\n" +
  "          \"geo_latitude\": 48.377582,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"1a726176-4ca8-455d-a02f-666bfce4a19b\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T00:18:24.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.991549,\n" +
  "          \"geo_latitude\": 48.603289,\n" +
  "          \"geo_precision\": 19,\n" +
  "          \"_id\": \"a96f163a-953e-44e2-b6bf-609d8f233be2\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T00:45:56.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.216523,\n" +
  "          \"geo_latitude\": 48.829417,\n" +
  "          \"geo_precision\": 7,\n" +
  "          \"_id\": \"286f0a20-a972-45af-b141-c4f9d0b51973\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T22:01:43.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.549732,\n" +
  "          \"geo_latitude\": 47.728006,\n" +
  "          \"geo_precision\": 6,\n" +
  "          \"_id\": \"3b5c38c1-2d51-46d6-95ad-a536ceee4cdb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-30T22:39:28.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.665319,\n" +
  "          \"geo_latitude\": 47.950702,\n" +
  "          \"geo_precision\": 23,\n" +
  "          \"_id\": \"d4ab5ebb-9a89-48c9-840d-516a129b3520\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T01:19:56.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.44559,\n" +
  "          \"geo_latitude\": 48.99969,\n" +
  "          \"geo_precision\": 11,\n" +
  "          \"_id\": \"4a1798ab-6eb6-4b19-ae27-24d2fac714cb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T01:57:00.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.612538,\n" +
  "          \"geo_latitude\": 49.2849,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"c8f14fc0-53a4-4cbc-8c79-3b362029c32e\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T02:28:37.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.560922,\n" +
  "          \"geo_latitude\": 49.505107,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"5a43836a-3ed6-439a-a8d4-267b8b13b8e9\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T03:00:14.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.594242,\n" +
  "          \"geo_latitude\": 49.86316,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"b369ca54-5663-4e92-b019-459c6d6b2354\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T03:33:13.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.480276,\n" +
  "          \"geo_latitude\": 50.026273,\n" +
  "          \"geo_precision\": 24,\n" +
  "          \"_id\": \"33018dd2-6dcf-4f51-a158-ddf1b5a985c6\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T04:02:48.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 8.249163,\n" +
  "          \"geo_latitude\": 50.231233,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"7d101e79-65c9-46b5-80f9-7079b87ae96a\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T04:35:26.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.941277,\n" +
  "          \"geo_latitude\": 50.41273,\n" +
  "          \"geo_precision\": 12,\n" +
  "          \"_id\": \"8f01d0ff-a455-49a9-8ddc-f903e0fc3b6b\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T05:08:46.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.722933,\n" +
  "          \"geo_latitude\": 50.504834,\n" +
  "          \"geo_precision\": 20,\n" +
  "          \"_id\": \"1dfbfed6-a543-4553-b8c5-61b289f425ae\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T05:46:10.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.38649,\n" +
  "          \"geo_latitude\": 50.62631,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"b5de2eb1-6141-4ef9-b8f5-1dab24b5eac5\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T06:23:13.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 14,\n" +
  "          \"_id\": \"f34fd52f-1cd3-4a98-aff6-6133d43eae00\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T06:59:16.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 13,\n" +
  "          \"_id\": \"f2c96320-364e-43e1-b72a-fc244fe0e2fd\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T07:37:00.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 5,\n" +
  "          \"_id\": \"fc45228f-ee43-4526-a213-ebb870e23525\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T08:06:14.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"dc543104-1665-4458-96f9-a1f33bc400e4\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T08:34:07.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.215233,\n" +
  "          \"geo_latitude\": 50.854331,\n" +
  "          \"geo_precision\": 22,\n" +
  "          \"_id\": \"1bd0b4b7-e6df-42ac-a813-f6e5659ea7d6\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T09:05:04.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 7.063672,\n" +
  "          \"geo_latitude\": 50.922367,\n" +
  "          \"geo_precision\": 9,\n" +
  "          \"_id\": \"f8728e14-1df7-4b7d-9410-360cb1e72e53\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T09:34:38.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.998203,\n" +
  "          \"geo_latitude\": 51.050598,\n" +
  "          \"geo_precision\": 12,\n" +
  "          \"_id\": \"230a7844-8f05-4f04-a791-a06265eadc79\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T10:10:41.353Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.824513,\n" +
  "          \"geo_latitude\": 51.371196,\n" +
  "          \"geo_precision\": 20,\n" +
  "          \"_id\": \"bd1f6345-71a1-48dc-b8f5-2197bd2f2c66\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T10:44:00.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.82318,\n" +
  "          \"geo_latitude\": 51.53213,\n" +
  "          \"geo_precision\": 17,\n" +
  "          \"_id\": \"28ad9289-dba7-43f1-bced-f8f2b9ebd1cb\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T11:24:28.153Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.625893,\n" +
  "          \"geo_latitude\": 51.710364,\n" +
  "          \"geo_precision\": 11,\n" +
  "          \"_id\": \"7f453867-7ea4-4af3-946a-763350b5b19d\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T11:54:43.753Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 6.261053,\n" +
  "          \"geo_latitude\": 51.862473,\n" +
  "          \"geo_precision\": 14,\n" +
  "          \"_id\": \"06067f5f-c62e-421b-a5ff-1a47b46b8f5c\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T12:31:26.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 5.91834,\n" +
  "          \"geo_latitude\": 52.01673,\n" +
  "          \"geo_precision\": 6,\n" +
  "          \"_id\": \"33715c2e-3cf4-405f-b2b1-60e20adc4731\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T13:03:24.553Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 5.561182,\n" +
  "          \"geo_latitude\": 52.042181,\n" +
  "          \"geo_precision\": 11,\n" +
  "          \"_id\": \"d52a7fc2-051d-4c1f-b096-67402e0e3d20\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"Obs_LocationEvent\",\n" +
  "          \"Name\": \"Obs_LocationEvent Measurement\",\n" +
  "          \"dateCreated\": \"2018-01-31T13:41:08.953Z\",\n" +
  "          \"description\": \"LatLong Measurement\",\n" +
  "          \"geo_longitude\": 5.155927,\n" +
  "          \"geo_latitude\": 52.099616,\n" +
  "          \"geo_precision\": 6,\n" +
  "          \"_id\": \"6bd54d40-0c9a-40b2-841f-f957068ab2d2\"\n" +
  "        }\n" +
  "      ]\n" +
  "    }\n" +
  "  ],\n" +
  "  \"parentID\": {\n" +
  "    \"$oid\": \"5a70d6f8ac57912610440a59\"\n" +
  "  },\n" +
  "  \"parentRelnID\": 19,\n" +
  "  \"parentRelnName\": \"shipmentUnits\",\n" +
  "  \"parentBaseClassID\": 3,\n" +
  "  \"parentBaseClassName\": \"Shipment\",\n" +
  "  \"lastUpdated\": \"2018-01-30T21:28:19.152Z\"\n" +
  "}\n" +
  "]";

export const shipments = "[{\n" +
  "  \"type\": \"Shipment\",\n" +
  "  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b\",\n" +
  "  \"ATA\": \"2016/12/16 04:00:00\",\n" +
  "  \"ATD\": \"2016/12/14 05:30:00\",\n" +
  "  \"ETA\": \"2016/12/16 02:30:00\",\n" +
  "  \"ETD\": \"2016/12/14 04:30:00\",\n" +
  "  \"Name\": \"SHP1\",\n" +
  "  \"natureOfGoods\": \"Wood\",\n" +
  "  \"shipmentID\": \"SHP1\",\n" +
  "  \"totalGrossVolume\": 264,\n" +
  "  \"totalGrossWeight\": 90,\n" +
  "  \"totalPackage\": 660,\n" +
  "  \"totalPieces\": 66,\n" +
  "  \"shipmentType\": \"HouseBillOfLading\",\n" +
  "  \"embedded\": [\n" +
  "    {\n" +
  "      \"parentRelnID\": 18,\n" +
  "      \"parentRelnName\": \"routeStages\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"obs_RouteStage\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a\",\n" +
  "          \"ATA\": \"2016/12/15 05:30:00\",\n" +
  "          \"ATD\": \"2016/12/14 05:30:00\",\n" +
  "          \"ETA\": \"2016/12/15 04:30:00\",\n" +
  "          \"ETD\": \"2016/12/14 04:30:00\",\n" +
  "          \"Name\": \"RouteStage1\",\n" +
  "          \"sequenceNumber\": 1,\n" +
  "          \"risk\": \"medium\",\n" +
  "          \"status\": \"planned\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a5a\",\n" +
  "          \"embedded\": [\n" +
  "            {\n" +
  "              \"parentRelnID\": 50,\n" +
  "              \"parentRelnName\": \"milestones\",\n" +
  "              \"entities\": [\n" +
  "                {\n" +
  "                  \"type\": \"Milestone\",\n" +
  "                  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a/milestones/5a70d6f8ac57912610440a5b\",\n" +
  "                  \"Name\": \"Sadipscing\",\n" +
  "                  \"dateEstimated\": \"1977/12/16\",\n" +
  "                  \"dateActual\": \"2012/02/05\",\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440a5b\",\n" +
  "                  \"embedded\": [\n" +
  "                    {\n" +
  "                      \"parentRelnID\": 60,\n" +
  "                      \"parentRelnName\": \"eventHistory\",\n" +
  "                      \"entities\": [\n" +
  "                        {\n" +
  "                          \"type\": \"Event\",\n" +
  "                          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a/milestones/5a70d6f8ac57912610440a5b/eventHistory/5a70d6f8ac57912610440a5c\",\n" +
  "                          \"Name\": \"Amet\",\n" +
  "                          \"dateCreated\": \"Ipsum\",\n" +
  "                          \"description\": \"Lorem\",\n" +
  "                          \"_id\": \"5a70d6f8ac57912610440a5c\",\n" +
  "                          \"embedded\": [\n" +
  "                            \n" +
  "                          ]\n" +
  "                        }\n" +
  "                      ]\n" +
  "                    }\n" +
  "                  ]\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"parentRelnID\": 51,\n" +
  "              \"parentRelnName\": \"eventHistory\",\n" +
  "              \"entities\": [\n" +
  "                {\n" +
  "                  \"type\": \"Event\",\n" +
  "                  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a/eventHistory/5a70d6f8ac57912610440a5d\",\n" +
  "                  \"Name\": \"Dolor\",\n" +
  "                  \"dateCreated\": \"Amet\",\n" +
  "                  \"description\": \"Consetetur\",\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440a5d\",\n" +
  "                  \"embedded\": [\n" +
  "                    \n" +
  "                  ]\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"associations\": [\n" +
  "            {\n" +
  "              \"relnID\": 28,\n" +
  "              \"relnName\": \"to\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440ac1\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"relnID\": 29,\n" +
  "              \"relnName\": \"from\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440abf\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ]\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"obs_RouteStage\",\n" +
  "          \"_id\": \"f10d2e94-0447-48c4-82b2-d78891468b57\",\n" +
  "          \"ATA\": \"2016/12/15 18:45:00\",\n" +
  "          \"ATD\": \"2016/12/15 06:45:00\",\n" +
  "          \"ETA\": \"2016/12/15 18:45:00\",\n" +
  "          \"ETD\": \"2016/12/15 06:30:00\",\n" +
  "          \"Name\": \"RouteStage2\",\n" +
  "          \"sequenceNumber\": \"2\",\n" +
  "          \"risk\": \"medium\",\n" +
  "          \"status\": \"planned\",\n" +
  "          \"embedded\": [\n" +
  "            {\n" +
  "              \"parentRelnID\": 50,\n" +
  "              \"parentRelnName\": \"milestones\",\n" +
  "              \"entities\": [\n" +
  "                {\n" +
  "                  \"type\": \"Milestone\",\n" +
  "                  \"_id\": \"3c74ea6a-76eb-4a8d-ab7a-9cddee060241\",\n" +
  "                  \"Name\": \"'text'\",\n" +
  "                  \"dateEstimated\": \"\\\"2018-1-30 00:31:40\\\"\",\n" +
  "                  \"dateActual\": \"\\\"2018-1-30 00:31:40\\\"\",\n" +
  "                  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/f10d2e94-0447-48c4-82b2-d78891468b57/milestones/3c74ea6a-76eb-4a8d-ab7a-9cddee060241\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"associations\": [\n" +
  "            {\n" +
  "              \"relnID\": 28,\n" +
  "              \"relnName\": \"to\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440abd\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"relnID\": 29,\n" +
  "              \"relnName\": \"from\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440ac1\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/f10d2e94-0447-48c4-82b2-d78891468b57\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"obs_RouteStage\",\n" +
  "          \"_id\": \"f81e29cd-e335-4235-8168-51271a047a07\",\n" +
  "          \"ATA\": \"2016/12/16 04:00:00\",\n" +
  "          \"ATD\": \"2016/12/15 21:45:00\",\n" +
  "          \"ETA\": \"2016/12/16 02:30:00\",\n" +
  "          \"ETD\": \"2016/12/15 20:45:00\",\n" +
  "          \"Name\": \"RouteStage3\",\n" +
  "          \"sequenceNumber\": \"3\",\n" +
  "          \"risk\": \"medium\",\n" +
  "          \"status\": \"planned\",\n" +
  "          \"associations\": [\n" +
  "            {\n" +
  "              \"relnID\": 28,\n" +
  "              \"relnName\": \"to\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440ac3\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"relnID\": 29,\n" +
  "              \"relnName\": \"from\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440abd\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/f81e29cd-e335-4235-8168-51271a047a07\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"parentRelnID\": 20,\n" +
  "      \"parentRelnName\": \"handlingInstructionList\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"HandlingInstruction\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/handlingInstructionList/5a70d6f8ac57912610440a5e\",\n" +
  "          \"description\": \"HandlewithCare\",\n" +
  "          \"code\": \"HC\",\n" +
  "          \"hiType\": \"OSI\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a5e\",\n" +
  "          \"embedded\": [\n" +
  "            \n" +
  "          ]\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"parentRelnID\": 21,\n" +
  "      \"parentRelnName\": \"signatureList\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"DepSignature\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/signatureList/5a70d6f8ac57912610440a5f\",\n" +
  "          \"name\": \"Departure Signature\",\n" +
  "          \"location\": \"Porto\",\n" +
  "          \"date\": \"2016/12/14\",\n" +
  "          \"signatureType\": \"Carrier\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a5f\",\n" +
  "          \"embedded\": [\n" +
  "            \n" +
  "          ]\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"parentRelnID\": 22,\n" +
  "      \"parentRelnName\": \"eventHistory\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"Event\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/eventHistory/5a70d6f8ac57912610440a60\",\n" +
  "          \"Name\": \"Consetetur\",\n" +
  "          \"dateCreated\": \"Dolor\",\n" +
  "          \"description\": \"Sadipscing\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a60\",\n" +
  "          \"embedded\": [\n" +
  "            \n" +
  "          ]\n" +
  "        }\n" +
  "      ]\n" +
  "    }\n" +
  "  ],\n" +
  "  \"parentID\": \"5a70d6f7ac57912610440a4e\",\n" +
  "  \"parentRelnID\": 369,\n" +
  "  \"parentRelnName\": \"Shipments\",\n" +
  "  \"parentBaseClassName\": \"LogisticsTestbedV12\",\n" +
  "  \"associations\": [\n" +
  "    {\n" +
  "      \"relnID\": 23,\n" +
  "      \"relnName\": \"weightUnit\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f9ac57912610440eff\",\n" +
  "          \"type\": \"CommonCodeWeight\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 24,\n" +
  "      \"relnName\": \"volumeUnit\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f9ac57912610440ee1\",\n" +
  "          \"type\": \"CommonCodeVolume\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 25,\n" +
  "      \"relnName\": \"currency\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f9ac57912610440eeb\",\n" +
  "          \"type\": \"ISO3AlphaCurrencyCode\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 26,\n" +
  "      \"relnName\": \"destinationLocation\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f8ac57912610440ac3\",\n" +
  "          \"type\": \"Location\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 27,\n" +
  "      \"relnName\": \"originLocation\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f8ac57912610440abf\",\n" +
  "          \"type\": \"Location\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    }\n" +
  "  ],\n" +
  "  \"lastUpdated\": \"2018-02-02T15:26:16.198Z\",\n" +
  "  \"id\": \"5a748318409b3a35d6e5e49b\"\n" +
  "},{\n" +
  "  \"type\": \"Shipment\",\n" +
  "  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b\",\n" +
  "  \"ATA\": \"2016/12/16 04:00:00\",\n" +
  "  \"ATD\": \"2016/12/14 05:30:00\",\n" +
  "  \"ETA\": \"2016/12/16 02:30:00\",\n" +
  "  \"ETD\": \"2016/12/14 04:30:00\",\n" +
  "  \"Name\": \"SHP1\",\n" +
  "  \"natureOfGoods\": \"Wood\",\n" +
  "  \"shipmentID\": \"SHP1\",\n" +
  "  \"totalGrossVolume\": 264,\n" +
  "  \"totalGrossWeight\": 90,\n" +
  "  \"totalPackage\": 660,\n" +
  "  \"totalPieces\": 66,\n" +
  "  \"shipmentType\": \"HouseBillOfLading\",\n" +
  "  \"embedded\": [\n" +
  "    {\n" +
  "      \"parentRelnID\": 18,\n" +
  "      \"parentRelnName\": \"routeStages\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"obs_RouteStage\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a\",\n" +
  "          \"ATA\": \"2016/12/15 05:30:00\",\n" +
  "          \"ATD\": \"2016/12/14 05:30:00\",\n" +
  "          \"ETA\": \"2016/12/15 04:30:00\",\n" +
  "          \"ETD\": \"2016/12/14 04:30:00\",\n" +
  "          \"Name\": \"RouteStage1\",\n" +
  "          \"sequenceNumber\": 1,\n" +
  "          \"risk\": \"medium\",\n" +
  "          \"status\": \"planned\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a5a\",\n" +
  "          \"embedded\": [\n" +
  "            {\n" +
  "              \"parentRelnID\": 50,\n" +
  "              \"parentRelnName\": \"milestones\",\n" +
  "              \"entities\": [\n" +
  "                {\n" +
  "                  \"type\": \"Milestone\",\n" +
  "                  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a/milestones/5a70d6f8ac57912610440a5b\",\n" +
  "                  \"Name\": \"Sadipscing\",\n" +
  "                  \"dateEstimated\": \"1977/12/16\",\n" +
  "                  \"dateActual\": \"2012/02/05\",\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440a5b\",\n" +
  "                  \"embedded\": [\n" +
  "                    {\n" +
  "                      \"parentRelnID\": 60,\n" +
  "                      \"parentRelnName\": \"eventHistory\",\n" +
  "                      \"entities\": [\n" +
  "                        {\n" +
  "                          \"type\": \"Event\",\n" +
  "                          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a/milestones/5a70d6f8ac57912610440a5b/eventHistory/5a70d6f8ac57912610440a5c\",\n" +
  "                          \"Name\": \"Amet\",\n" +
  "                          \"dateCreated\": \"Ipsum\",\n" +
  "                          \"description\": \"Lorem\",\n" +
  "                          \"_id\": \"5a70d6f8ac57912610440a5c\",\n" +
  "                          \"embedded\": [\n" +
  "                            \n" +
  "                          ]\n" +
  "                        }\n" +
  "                      ]\n" +
  "                    }\n" +
  "                  ]\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"parentRelnID\": 51,\n" +
  "              \"parentRelnName\": \"eventHistory\",\n" +
  "              \"entities\": [\n" +
  "                {\n" +
  "                  \"type\": \"Event\",\n" +
  "                  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a/eventHistory/5a70d6f8ac57912610440a5d\",\n" +
  "                  \"Name\": \"Dolor\",\n" +
  "                  \"dateCreated\": \"Amet\",\n" +
  "                  \"description\": \"Consetetur\",\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440a5d\",\n" +
  "                  \"embedded\": [\n" +
  "                    \n" +
  "                  ]\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"associations\": [\n" +
  "            {\n" +
  "              \"relnID\": 28,\n" +
  "              \"relnName\": \"to\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440ac1\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"relnID\": 29,\n" +
  "              \"relnName\": \"from\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440abf\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ]\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"obs_RouteStage\",\n" +
  "          \"_id\": \"f10d2e94-0447-48c4-82b2-d78891468b57\",\n" +
  "          \"ATA\": \"2016/12/15 18:45:00\",\n" +
  "          \"ATD\": \"2016/12/15 06:45:00\",\n" +
  "          \"ETA\": \"2016/12/15 18:45:00\",\n" +
  "          \"ETD\": \"2016/12/15 06:30:00\",\n" +
  "          \"Name\": \"RouteStage2\",\n" +
  "          \"sequenceNumber\": \"2\",\n" +
  "          \"risk\": \"medium\",\n" +
  "          \"status\": \"planned\",\n" +
  "          \"embedded\": [\n" +
  "            {\n" +
  "              \"parentRelnID\": 50,\n" +
  "              \"parentRelnName\": \"milestones\",\n" +
  "              \"entities\": [\n" +
  "                {\n" +
  "                  \"type\": \"Milestone\",\n" +
  "                  \"_id\": \"3c74ea6a-76eb-4a8d-ab7a-9cddee060241\",\n" +
  "                  \"Name\": \"'text'\",\n" +
  "                  \"dateEstimated\": \"\\\"2018-1-30 00:31:40\\\"\",\n" +
  "                  \"dateActual\": \"\\\"2018-1-30 00:31:40\\\"\",\n" +
  "                  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/f10d2e94-0447-48c4-82b2-d78891468b57/milestones/3c74ea6a-76eb-4a8d-ab7a-9cddee060241\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"associations\": [\n" +
  "            {\n" +
  "              \"relnID\": 28,\n" +
  "              \"relnName\": \"to\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440abd\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"relnID\": 29,\n" +
  "              \"relnName\": \"from\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440ac1\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/f10d2e94-0447-48c4-82b2-d78891468b57\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"obs_RouteStage\",\n" +
  "          \"_id\": \"f81e29cd-e335-4235-8168-51271a047a07\",\n" +
  "          \"ATA\": \"2016/12/16 04:00:00\",\n" +
  "          \"ATD\": \"2016/12/15 21:45:00\",\n" +
  "          \"ETA\": \"2016/12/16 02:30:00\",\n" +
  "          \"ETD\": \"2016/12/15 20:45:00\",\n" +
  "          \"Name\": \"RouteStage3\",\n" +
  "          \"sequenceNumber\": \"3\",\n" +
  "          \"risk\": \"medium\",\n" +
  "          \"status\": \"planned\",\n" +
  "          \"associations\": [\n" +
  "            {\n" +
  "              \"relnID\": 28,\n" +
  "              \"relnName\": \"to\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440ac3\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"relnID\": 29,\n" +
  "              \"relnName\": \"from\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440abd\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/f81e29cd-e335-4235-8168-51271a047a07\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"parentRelnID\": 20,\n" +
  "      \"parentRelnName\": \"handlingInstructionList\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"HandlingInstruction\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/handlingInstructionList/5a70d6f8ac57912610440a5e\",\n" +
  "          \"description\": \"HandlewithCare\",\n" +
  "          \"code\": \"HC\",\n" +
  "          \"hiType\": \"OSI\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a5e\",\n" +
  "          \"embedded\": [\n" +
  "            \n" +
  "          ]\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"parentRelnID\": 21,\n" +
  "      \"parentRelnName\": \"signatureList\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"DepSignature\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/signatureList/5a70d6f8ac57912610440a5f\",\n" +
  "          \"name\": \"Departure Signature\",\n" +
  "          \"location\": \"Porto\",\n" +
  "          \"date\": \"2016/12/14\",\n" +
  "          \"signatureType\": \"Carrier\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a5f\",\n" +
  "          \"embedded\": [\n" +
  "            \n" +
  "          ]\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"parentRelnID\": 22,\n" +
  "      \"parentRelnName\": \"eventHistory\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"Event\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/eventHistory/5a70d6f8ac57912610440a60\",\n" +
  "          \"Name\": \"Consetetur\",\n" +
  "          \"dateCreated\": \"Dolor\",\n" +
  "          \"description\": \"Sadipscing\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a60\",\n" +
  "          \"embedded\": [\n" +
  "            \n" +
  "          ]\n" +
  "        }\n" +
  "      ]\n" +
  "    }\n" +
  "  ],\n" +
  "  \"parentID\": \"5a70d6f7ac57912610440a4e\",\n" +
  "  \"parentRelnID\": 369,\n" +
  "  \"parentRelnName\": \"Shipments\",\n" +
  "  \"parentBaseClassName\": \"LogisticsTestbedV12\",\n" +
  "  \"associations\": [\n" +
  "    {\n" +
  "      \"relnID\": 23,\n" +
  "      \"relnName\": \"weightUnit\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f9ac57912610440eff\",\n" +
  "          \"type\": \"CommonCodeWeight\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 24,\n" +
  "      \"relnName\": \"volumeUnit\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f9ac57912610440ee1\",\n" +
  "          \"type\": \"CommonCodeVolume\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 25,\n" +
  "      \"relnName\": \"currency\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f9ac57912610440eeb\",\n" +
  "          \"type\": \"ISO3AlphaCurrencyCode\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 26,\n" +
  "      \"relnName\": \"destinationLocation\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f8ac57912610440ac3\",\n" +
  "          \"type\": \"Location\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 27,\n" +
  "      \"relnName\": \"originLocation\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f8ac57912610440abf\",\n" +
  "          \"type\": \"Location\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    }\n" +
  "  ],\n" +
  "  \"lastUpdated\": \"2018-02-02T15:26:16.198Z\",\n" +
  "  \"id\": \"5a748318409b3a35d6e5e49b\"\n" +
  "},{\n" +
  "  \"type\": \"Shipment\",\n" +
  "  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b\",\n" +
  "  \"ATA\": \"2016/12/16 04:00:00\",\n" +
  "  \"ATD\": \"2016/12/14 05:30:00\",\n" +
  "  \"ETA\": \"2016/12/16 02:30:00\",\n" +
  "  \"ETD\": \"2016/12/14 04:30:00\",\n" +
  "  \"Name\": \"SHP1\",\n" +
  "  \"natureOfGoods\": \"Wood\",\n" +
  "  \"shipmentID\": \"SHP1\",\n" +
  "  \"totalGrossVolume\": 264,\n" +
  "  \"totalGrossWeight\": 90,\n" +
  "  \"totalPackage\": 660,\n" +
  "  \"totalPieces\": 66,\n" +
  "  \"shipmentType\": \"HouseBillOfLading\",\n" +
  "  \"embedded\": [\n" +
  "    {\n" +
  "      \"parentRelnID\": 18,\n" +
  "      \"parentRelnName\": \"routeStages\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"obs_RouteStage\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a\",\n" +
  "          \"ATA\": \"2016/12/15 05:30:00\",\n" +
  "          \"ATD\": \"2016/12/14 05:30:00\",\n" +
  "          \"ETA\": \"2016/12/15 04:30:00\",\n" +
  "          \"ETD\": \"2016/12/14 04:30:00\",\n" +
  "          \"Name\": \"RouteStage1\",\n" +
  "          \"sequenceNumber\": 1,\n" +
  "          \"risk\": \"medium\",\n" +
  "          \"status\": \"planned\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a5a\",\n" +
  "          \"embedded\": [\n" +
  "            {\n" +
  "              \"parentRelnID\": 50,\n" +
  "              \"parentRelnName\": \"milestones\",\n" +
  "              \"entities\": [\n" +
  "                {\n" +
  "                  \"type\": \"Milestone\",\n" +
  "                  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a/milestones/5a70d6f8ac57912610440a5b\",\n" +
  "                  \"Name\": \"Sadipscing\",\n" +
  "                  \"dateEstimated\": \"1977/12/16\",\n" +
  "                  \"dateActual\": \"2012/02/05\",\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440a5b\",\n" +
  "                  \"embedded\": [\n" +
  "                    {\n" +
  "                      \"parentRelnID\": 60,\n" +
  "                      \"parentRelnName\": \"eventHistory\",\n" +
  "                      \"entities\": [\n" +
  "                        {\n" +
  "                          \"type\": \"Event\",\n" +
  "                          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a/milestones/5a70d6f8ac57912610440a5b/eventHistory/5a70d6f8ac57912610440a5c\",\n" +
  "                          \"Name\": \"Amet\",\n" +
  "                          \"dateCreated\": \"Ipsum\",\n" +
  "                          \"description\": \"Lorem\",\n" +
  "                          \"_id\": \"5a70d6f8ac57912610440a5c\",\n" +
  "                          \"embedded\": [\n" +
  "                            \n" +
  "                          ]\n" +
  "                        }\n" +
  "                      ]\n" +
  "                    }\n" +
  "                  ]\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"parentRelnID\": 51,\n" +
  "              \"parentRelnName\": \"eventHistory\",\n" +
  "              \"entities\": [\n" +
  "                {\n" +
  "                  \"type\": \"Event\",\n" +
  "                  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/5a70d6f8ac57912610440a5a/eventHistory/5a70d6f8ac57912610440a5d\",\n" +
  "                  \"Name\": \"Dolor\",\n" +
  "                  \"dateCreated\": \"Amet\",\n" +
  "                  \"description\": \"Consetetur\",\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440a5d\",\n" +
  "                  \"embedded\": [\n" +
  "                    \n" +
  "                  ]\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"associations\": [\n" +
  "            {\n" +
  "              \"relnID\": 28,\n" +
  "              \"relnName\": \"to\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440ac1\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"relnID\": 29,\n" +
  "              \"relnName\": \"from\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440abf\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ]\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"obs_RouteStage\",\n" +
  "          \"_id\": \"f10d2e94-0447-48c4-82b2-d78891468b57\",\n" +
  "          \"ATA\": \"2016/12/15 18:45:00\",\n" +
  "          \"ATD\": \"2016/12/15 06:45:00\",\n" +
  "          \"ETA\": \"2016/12/15 18:45:00\",\n" +
  "          \"ETD\": \"2016/12/15 06:30:00\",\n" +
  "          \"Name\": \"RouteStage2\",\n" +
  "          \"sequenceNumber\": \"2\",\n" +
  "          \"risk\": \"medium\",\n" +
  "          \"status\": \"planned\",\n" +
  "          \"embedded\": [\n" +
  "            {\n" +
  "              \"parentRelnID\": 50,\n" +
  "              \"parentRelnName\": \"milestones\",\n" +
  "              \"entities\": [\n" +
  "                {\n" +
  "                  \"type\": \"Milestone\",\n" +
  "                  \"_id\": \"3c74ea6a-76eb-4a8d-ab7a-9cddee060241\",\n" +
  "                  \"Name\": \"'text'\",\n" +
  "                  \"dateEstimated\": \"\\\"2018-1-30 00:31:40\\\"\",\n" +
  "                  \"dateActual\": \"\\\"2018-1-30 00:31:40\\\"\",\n" +
  "                  \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/f10d2e94-0447-48c4-82b2-d78891468b57/milestones/3c74ea6a-76eb-4a8d-ab7a-9cddee060241\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"associations\": [\n" +
  "            {\n" +
  "              \"relnID\": 28,\n" +
  "              \"relnName\": \"to\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440abd\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"relnID\": 29,\n" +
  "              \"relnName\": \"from\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440ac1\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/f10d2e94-0447-48c4-82b2-d78891468b57\"\n" +
  "        },\n" +
  "        {\n" +
  "          \"type\": \"obs_RouteStage\",\n" +
  "          \"_id\": \"f81e29cd-e335-4235-8168-51271a047a07\",\n" +
  "          \"ATA\": \"2016/12/16 04:00:00\",\n" +
  "          \"ATD\": \"2016/12/15 21:45:00\",\n" +
  "          \"ETA\": \"2016/12/16 02:30:00\",\n" +
  "          \"ETD\": \"2016/12/15 20:45:00\",\n" +
  "          \"Name\": \"RouteStage3\",\n" +
  "          \"sequenceNumber\": \"3\",\n" +
  "          \"risk\": \"medium\",\n" +
  "          \"status\": \"planned\",\n" +
  "          \"associations\": [\n" +
  "            {\n" +
  "              \"relnID\": 28,\n" +
  "              \"relnName\": \"to\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440ac3\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            },\n" +
  "            {\n" +
  "              \"relnID\": 29,\n" +
  "              \"relnName\": \"from\",\n" +
  "              \"data\": [\n" +
  "                {\n" +
  "                  \"_id\": \"5a70d6f8ac57912610440abd\",\n" +
  "                  \"type\": \"Location\",\n" +
  "                  \"desc\": \"\"\n" +
  "                }\n" +
  "              ]\n" +
  "            }\n" +
  "          ],\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/routeStages/f81e29cd-e335-4235-8168-51271a047a07\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"parentRelnID\": 20,\n" +
  "      \"parentRelnName\": \"handlingInstructionList\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"HandlingInstruction\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/handlingInstructionList/5a70d6f8ac57912610440a5e\",\n" +
  "          \"description\": \"HandlewithCare\",\n" +
  "          \"code\": \"HC\",\n" +
  "          \"hiType\": \"OSI\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a5e\",\n" +
  "          \"embedded\": [\n" +
  "            \n" +
  "          ]\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"parentRelnID\": 21,\n" +
  "      \"parentRelnName\": \"signatureList\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"DepSignature\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/signatureList/5a70d6f8ac57912610440a5f\",\n" +
  "          \"name\": \"Departure Signature\",\n" +
  "          \"location\": \"Porto\",\n" +
  "          \"date\": \"2016/12/14\",\n" +
  "          \"signatureType\": \"Carrier\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a5f\",\n" +
  "          \"embedded\": [\n" +
  "            \n" +
  "          ]\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"parentRelnID\": 22,\n" +
  "      \"parentRelnName\": \"eventHistory\",\n" +
  "      \"entities\": [\n" +
  "        {\n" +
  "          \"type\": \"Event\",\n" +
  "          \"path\": \"/LogisticsTestbedV12/Shipments/5a748318409b3a35d6e5e49b/eventHistory/5a70d6f8ac57912610440a60\",\n" +
  "          \"Name\": \"Consetetur\",\n" +
  "          \"dateCreated\": \"Dolor\",\n" +
  "          \"description\": \"Sadipscing\",\n" +
  "          \"_id\": \"5a70d6f8ac57912610440a60\",\n" +
  "          \"embedded\": [\n" +
  "            \n" +
  "          ]\n" +
  "        }\n" +
  "      ]\n" +
  "    }\n" +
  "  ],\n" +
  "  \"parentID\": \"5a70d6f7ac57912610440a4e\",\n" +
  "  \"parentRelnID\": 369,\n" +
  "  \"parentRelnName\": \"Shipments\",\n" +
  "  \"parentBaseClassName\": \"LogisticsTestbedV12\",\n" +
  "  \"associations\": [\n" +
  "    {\n" +
  "      \"relnID\": 23,\n" +
  "      \"relnName\": \"weightUnit\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f9ac57912610440eff\",\n" +
  "          \"type\": \"CommonCodeWeight\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 24,\n" +
  "      \"relnName\": \"volumeUnit\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f9ac57912610440ee1\",\n" +
  "          \"type\": \"CommonCodeVolume\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 25,\n" +
  "      \"relnName\": \"currency\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f9ac57912610440eeb\",\n" +
  "          \"type\": \"ISO3AlphaCurrencyCode\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 26,\n" +
  "      \"relnName\": \"destinationLocation\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f8ac57912610440ac3\",\n" +
  "          \"type\": \"Location\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    },\n" +
  "    {\n" +
  "      \"relnID\": 27,\n" +
  "      \"relnName\": \"originLocation\",\n" +
  "      \"data\": [\n" +
  "        {\n" +
  "          \"_id\": \"5a70d6f8ac57912610440abf\",\n" +
  "          \"type\": \"Location\",\n" +
  "          \"desc\": \"\"\n" +
  "        }\n" +
  "      ]\n" +
  "    }\n" +
  "  ],\n" +
  "  \"lastUpdated\": \"2018-02-02T15:26:16.198Z\",\n" +
  "  \"id\": \"5a748318409b3a35d6e5e49b\"\n" +
  "}]";

*/

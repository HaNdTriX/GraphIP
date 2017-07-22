module.exports = `
  # The Location type represents a location entry.
  type Location {
    # IP version (4 or 6) of clients
    ip: String!

    # A two-character ISO 3166-1 country code for the
    # country associated with the IP address.
    country_code: String!

    # Represents the country name
    country_name: String!

    # A two character ISO-3166-2 or FIPS 10-4 code
    # for the state/region associated with the IP address.
    region_code: String!

    # The region name associated with the IP address.
    region_name: String!

    # City
    city: String!

    # The postal code associated with the IP address.
    # These are available for some IP addresses in Australia,
    # Canada, France, Germany, Italy, Spain, Switzerland,
    # United Kingdom, and the US. We return the first 3 characters
    # for Canadian postal codes. We return the the first 2-4
    # characters (outward code) for postal codes in the United Kingdom.
    zip_code: String!

    # The time zone associated with location, as specified by
    # the IANA Time Zone Database, e.g., “America/New_York”.
    time_zone: String!

    # The approximate latitude of the location associated with the IP
    # address.This value is not precise and should not be used to identify a
    # particular address or household
    latitude: Float!

    # The approximate longitude of the location associated with the IP address.
    # Latitude and Longitude are often near the center of population.
    # These values are not precise and should not be used to identify
    # a particular address or household.
    longitude: Float!

    # The metro code associated with the IP address.
    # These are only available for IP addresses in the US.
    # MaxMind returns the same metro codes as used by DoubleClick.
    metro_code: Int!
  }
  type RootQuery {
    me: Location!
    hostname(value: String!): Location
    ip(value: String!): Location
  }
  schema {
    query: RootQuery
  }
`

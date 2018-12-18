export interface Data {

    _id : string,
    data : {
        url : string,
        root_path : string,
        cuid : string,
        callback_url : string,
        callback_method :string
    },
    name : String,
    type : string,
    priority : number,
    nextRunAt : string,
    repeatInterval : string,
    repeatTimezone : string,
    lastModifiedBy : string,
    lockedAt : string,
    lastRunAt : string,
    lastFinishedAt : string



}




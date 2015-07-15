function jump_to_notes() {
    $("#issue-form > .box > .tabular:first-child").hide();
    showAndScrollTo("update", "issue_notes");
}

function make_status(newStatus, note, assignee_id) {
	if (typeof(jQuery) != 'undefined') {
		// redmine uses jQuery so use it.
		var $ = jQuery;
		var s = $('#issue_status_id');
		if (s.length === 0) {
			return;
		}
		var f = $('#issue-form');
		if (f.length === 0) {
			return;
		}
		s.val(newStatus);
		if (arguments.length == 3) {
            		s = $('#issue_assigned_to_id');
		    	if (s.length === 0) {
				return;
		    	}
            		s.val(assignee_id);
        	}
        	if (note == false) {
		    f.submit();
	        } else {
        	    jump_to_notes()
	        }
	} else {
		// redmine uses prototype so use it.
		var $ = document.getElementById;
		var s = $('issue_status_id');
		if (s === null) {
			return;
		}
		var f = $('issue-form');
		s.value = newStatus;
        if (note == false) {
		    f.submit();
        } else {
            showAndScrollTo("update", "issue_notes");
        }
	}
};

function make_resolution(resolution, resolution_cf_id, resolved, note) {
  if (typeof(jQuery) != 'undefined') {
    var $=jQuery;
    var s = $('#issue_status_id');
    if (s.length === 0) {
      return;
    }
    s.val(resolved);
    s = $('#issue_custom_field_values_'+resolution_cf_id);
    if (s.length === 0) {
      return;
    }
    s.val(resolution);
    var f = $('#issue-form');
    if (f.length === 0) {
      return;
    }
    if (note == false) {
        f.submit();
    } else {
        jump_to_notes()
    }
  } else {
    var $ = document.getElementById;
    var s = $('issue_status_id');
    if (s.length === 0) {
      return;
    }
    s.val(resolved);
    s = $('issue_custom_field_values_'+resolution_cf_id);
    if (s.length === 0) {
      return;
    }
    s.val(resolution);
    var f = $('issue-form');
    if (f.length === 0) {
      return;
    }  
    showAndScrollTo("update", "issue_notes");
    //f.submit();                                          
  }
};
